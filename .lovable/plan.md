# Lock character appearance across panels

## Goal
Keep each recurring character visually consistent in every generated image, especially age, face, hair, body shape, and clothing.

## Changes
- Make the character consistency sheet record age cues and immutable facial traits more explicitly whenever the script establishes them.
- Replace the current partial trait check with a compact, mandatory identity fingerprint for every named character in each image prompt.
- Preserve that fingerprint through all retry and simplified prompt variants so failed-image retries cannot re-age or redesign characters.
- Strengthen multi-frame image instructions so the same character design is reused within every frame of one image.
- Add focused tests for elderly-character age, white/grey hair, face, and outfit locks.

## Technical details
- Keep action, framing, lettering, and existing image models unchanged.
- Avoid duplicate character descriptions that can create extra people; each character receives one concise identity fingerprint.
- Give immutable identity text a reserved prompt budget so it cannot be clipped by long scene descriptions.

## Verification
- Run the character-lock tests and existing key scheduler tests.
- Confirm the preview builds without errors and inspect a generated prompt to ensure the full identity fingerprint reaches Agnes on every retry.
