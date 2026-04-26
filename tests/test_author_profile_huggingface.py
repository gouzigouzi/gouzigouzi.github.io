import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
AUTHOR_PROFILE = ROOT / "_includes" / "author-profile.html"


class AuthorProfileHuggingFaceTests(unittest.TestCase):
    def test_huggingface_uses_dedicated_svg_icon(self):
        content = AUTHOR_PROFILE.read_text(encoding="utf-8")
        self.assertIn("author.huggingface", content)
        self.assertIn("assets/images/icons/huggingface.svg", content)


if __name__ == "__main__":
    unittest.main()
