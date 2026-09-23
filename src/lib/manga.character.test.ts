import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { composeImagePrompt, identityBrief } from "./manga.server";

const bible =
  "Mira: oval face, narrow amber eyes, warm brown skin, straight black waist-length hair with a left-side part, silver eyebrow scar, slim build, teal high-collar coat with brass clasps\n" +
  "Arun: square jaw, thick straight brows, dark brown eyes, tan skin, short wavy auburn hair, broad build, charcoal tunic with red shoulder straps";

describe("character identity rendering", () => {
  test("keeps a compact visual fingerprint even when scene text already includes traits", () => {
    const brief = identityBrief(
      "Mira with straight black hair and narrow amber eyes reaches for the gate",
      bible,
    );
    assert.match(brief, /the one depiction of Mira keeps/i);
    assert.match(brief, /silver eyebrow scar/i);
    assert.match(brief, /teal high-collar coat/i);
    assert.match(brief, /exactly one person/i);
  });

  test("ships identity and fine-detail locks in the final image prompt", () => {
    const prompt = composeImagePrompt(
      "Mira reaches across a rain-soaked stone courtyard toward the iron gate, jaw tense and left hand extended.",
      bible,
      "Mira reaches for the gate.",
    );
    assert.match(prompt, /silver eyebrow scar/i);
    assert.match(prompt, /stable eye spacing, jawline, nose and eyebrows/i);
    assert.match(prompt, /garment seams, folds, fasteners and material textures/i);
    assert.match(prompt, /identical character facial proportions/i);
  });
});