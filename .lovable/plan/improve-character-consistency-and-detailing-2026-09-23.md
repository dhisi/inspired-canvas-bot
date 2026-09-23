# Improve character consistency and detailing

## Changes
- Strengthen the generated character guide with stable facial geometry, distinctive identifiers, outfit construction, and recurring accessories.
- Preserve each named character’s exact visual fingerprint in every relevant image while avoiding duplicate-character or reference-sheet results.
- Reserve enough image-prompt space for identity details and reinforce fine facial, hair, clothing, hand, and material rendering.
- Keep the existing story, framing, lettering, provider, and model behavior unchanged.
- Add focused regression tests for character identity locking and verify the preview build.

## Technical details
- Improve the character-guide instruction and compact identity extraction rather than adding repeated long descriptions.
- Maintain prompt ordering so the timestamp action remains dominant and identity information stays within the image model’s effective context window.
