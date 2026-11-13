#!/usr/bin/env python3
"""
build.py - assembles the three UNFOLD pages from the section files.

    src/sections/*.html   one HTML file per heading (header, hero, about ...)
    src/pages/*.tpl       the page shell that lists which sections it uses
    Assets/css/*.css      one stylesheet per heading
    Assets/js/*.js        one script per heading

Run from the UNFOLD folder:   python3 build.py
Edit a section file, run the script, and the page is regenerated.
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
SECTIONS = os.path.join(ROOT, "src", "sections")
PAGES = os.path.join(ROOT, "src", "pages")

# page template -> (output file, nav key that should be highlighted)
PAGE_MAP = {
    "index": ("index.html", "home"),
    "about": ("about.html", "about"),
    "skills": ("skills.html", "skills"),
    "projects": ("projects.html", "projects"),
    "education": ("education.html", "education"),
    "certificates": ("certificates.html", "certificates"),
    "contact": ("contact.html", "contact"),
}

def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read().rstrip("\n")

def build_page(name, out_file, active_key):
    template = read(os.path.join(PAGES, name + ".tpl"))

    def fill(match):
        section = match.group(1)
        html = read(os.path.join(SECTIONS, section + ".html"))
        if section == "header":
            # mark the current page's nav link as active
            html = re.sub(
                r'<a href="([^"]+)" data-nav="%s">' % active_key,
                r'<a href="\1" data-nav="%s" class="active">' % active_key,
                html,
            )
        return html

    html = re.sub(r"\{\{([a-z-]+)\}\}", fill, template)
    with open(os.path.join(ROOT, out_file), "w", encoding="utf-8") as f:
        f.write(html + "\n")
    print("built", out_file)

if __name__ == "__main__":
    for page, (out, key) in PAGE_MAP.items():
        build_page(page, out, key)
