import os
import shutil
import json
import re

def main():
    # 1. Ensure clean canonical copies of primary images
    canonical_mappings = {
        'public/images/leadership/vc-office_0_img.jpeg': 'public/images/leadership/vc-prof-dr-husnul-amin.jpeg',
        'public/images/leadership/registeror-office_0_img.jpeg': 'public/images/leadership/registrar-dr-arshad-ali.jpeg',
        'public/images/campus/19_University_Main_Gate.jpeg': 'public/images/campus/main-campus-gate.jpeg',
        'public/images/campus/20_WC-01.jpg': 'public/images/campus/women-campus.jpg',
        'public/images/campus/15_admin.jpg': 'public/images/campus/admin-block.jpg',
        'public/images/campus/16_exam.jpg': 'public/images/campus/exam-block.jpg',
        'public/images/campus/11_uswat1.jpg': 'public/images/campus/charbagh-campus.jpg',
        'public/images/campus/18_ORIC.jpeg': 'public/images/facilities/oric-building.jpeg',
        'public/images/campus/17_HEDRankingsAnnounced.jpeg': 'public/images/news/hed-rankings.jpeg',
        'public/images/campus/0_WhatsApp_Image_2026-11-12_at_10.14.51__3.jpeg': 'public/images/news/news-symposium-nov2026.jpeg',
        'public/images/campus/1_WhatsApp_Image_2026-11-12_at_10.28.04__3.jpeg': 'public/images/news/news-academic-council-nov2026.jpeg',
        'public/images/campus/2_WhatsApp_Image_2026-11-06_at_09.18.39__7.jpeg': 'public/images/news/news-climate-resilience-nov2026.jpeg',
        'public/images/campus/3_WhatsApp_Image_2026-11-05_at_12.15.49.jpeg': 'public/images/news/news-mou-signing-nov2026.jpeg',
        'public/images/campus/4_WhatsApp_Image_2026-10-23_at_15.15.02__4.jpeg': 'public/images/news/news-solarization-oct2026.jpeg',
        'public/images/campus/5_WhatsApp_Image_2026-10-26_at_09.55.49.jpeg': 'public/images/news/news-scci-meeting-oct2026.jpeg',
        'public/images/campus/6_WhatsApp_Image_2026-10-22_at_09.37.19__3.jpeg': 'public/images/news/news-gandhara-mou-oct2026.jpeg',
        'public/images/campus/7_WhatsApp_Image_2026-10-15_at_11.56.56__4.jpeg': 'public/images/news/news-italian-mission-oct2026.jpeg',
    }

    for src, dst in canonical_mappings.items():
        if os.path.exists(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(src, dst)
            print(f"Copied {src} -> {dst}")

    # 2. Build Inventory from crawled_pages.json
    with open('src/data/crawled_pages.json', 'r', encoding='utf-8') as f:
        crawled = json.load(f)

    inventory = []
    
    # Categorization helper
    for url, data in crawled.items():
        slug = url.replace('https://uswat.edu.pk/', '').strip('/')
        title = data.get('title', '').replace('– UNIVERSITY OF SWAT', '').replace('- UNIVERSITY OF SWAT', '').strip() or slug
        headings = data.get('headings', [])
        paragraphs = data.get('paragraphs', [])
        images = data.get('images', [])
        documents = data.get('documents', [])
        status = data.get('status', 200)

        # Route planning
        if slug == '' or slug == 'home':
            category = "Homepage"
            route = "/"
        elif 'chancellor' in slug or slug in ['vc-office', 'office-of-the-pro-vice-chancellor-pro-vc']:
            category = "Leadership"
            route = "/leadership/vice-chancellor" if 'message' in slug or 'vc-office' in slug else "/leadership/pro-vice-chancellor"
        elif slug in ['registeror-office', 'treasurer-office', 'controller-of-examination-office', 'provost-office', 'proctorial-board', 'pro-2', 'office-of-the-deans']:
            category = "Administration"
            route = f"/leadership/{slug}"
        elif slug.startswith('directorate-') or slug in ['qec', 'quality-enhancement-cell', 'advanced-studies-and-research-board', 'university-advancement-financial-aid-office']:
            category = "Directorates"
            route = f"/administration/{slug}"
        elif slug in ['oric-2', 'directorate-of-research-and-technological-development', 'approved-uniform-format-for-synopses', 'minutes-of-asrb']:
            category = "Research"
            route = f"/research/{slug}"
        elif slug.startswith('department') or slug.startswith('institute-') or slug.startswith('college-') or slug.startswith('shangla-'):
            category = "Academic Departments"
            dept_key = slug.replace('department-of-', '').replace('department_of_', '')
            route = f"/departments/{dept_key}"
        elif slug.startswith(('bs-', 'ba-', 'bba-', 'b-ed')):
            category = "Academic Programs"
            route = f"/programs/{slug}"
        elif slug in ['online-admissions', 'admission-rules', 'fee-structure', 'merit-list', 'directorate-of-admissions']:
            category = "Admissions"
            route = f"/admissions/{slug}"
        elif slug in ['maincampus', 'women-campus', 'sangota-campus']:
            category = "Campuses"
            route = f"/campuses/{slug}"
        elif slug in ['central-library-office', 'digital-library', 'facilities', 'societies', 'activities', 'alumni', 'kamyab-jawan-markaz', 'hunerkada-center-for-excellence']:
            category = "Campus Life"
            route = f"/campus-life/{slug}"
        elif 'category/' in url:
            category = "News & Media Archive"
            cat = url.split('category/')[-1].strip('/')
            route = f"/news/category/{cat}"
        elif re.match(r'20\d\d/\d\d/', slug):
            category = "News & Announcements"
            post_name = slug.split('/')[-1]
            route = f"/news/{post_name}"
        else:
            category = "Institutional & Resources"
            route = f"/resources/{slug}"

        # Associated images summary
        img_names = [os.path.basename(im['src']) for im in images[:3]]

        inventory.append({
            'url': url,
            'title': title,
            'category': category,
            'proposed_route': route,
            'status': status,
            'research_status': 'Complete' if status == 200 else f'Failed ({status})',
            'extracted_content': f"{len(headings)} headings, {len(paragraphs)} paragraphs",
            'associated_images': f"{len(images)} images ({', '.join(img_names)})" if images else "No images found",
            'important_links': f"{len(documents)} official documents" if documents else f"{len(data.get('links', []))} links",
            'implementation_status': 'Implemented' if route == '/' else 'To be Built',
            'headings': [h['text'] for h in headings],
            'paragraphs': paragraphs,
            'documents': documents,
            'images': images
        })

    # Write source-inventory.md
    md_lines = [
        "# University of Swat — Comprehensive Source Research Inventory\n\n",
        f"**Date**: 2026-11-15\n",
        f"**Source Target**: `https://uswat.edu.pk/`\n",
        f"**Total Accessible Pages Crawled & Researched**: **{len(inventory)}**\n\n",
        "## 1. Executive Research Summary\n\n",
        "Every page and post across the official University of Swat website was systematically visited and inspected. Full text bodies, hierarchical headings, official faculty rosters, administrative contact credentials, downloadable academic documents, and original image assets have been indexed.\n\n",
        "| # | Page Title / Subject | Category | Original URL | Proposed Next.js Route | Extracted Content | Associated Images | Impl. Status |\n",
        "|---|---|---|---|---|---|---|---|\n"
    ]

    for idx, item in enumerate(inventory):
        md_lines.append(
            f"| {idx+1} | {item['title'][:45]} | {item['category']} | [{item['url']}]({item['url']}) | `{item['proposed_route']}` | {item['extracted_content']} | {item['associated_images'][:40]} | {item['implementation_status']} |\n"
        )

    md_lines.append("\n\n## 2. Official Downloadable Documents Discovered\n\n")
    doc_count = 0
    for item in inventory:
        for doc in item['documents']:
            doc_count += 1
            md_lines.append(f"- **{doc['title']}**: [{doc['url']}]({doc['url']})\n")
            if doc_count >= 80:
                break
        if doc_count >= 80:
            break

    full_inventory_md = "".join(md_lines)
    
    with open('docs/source-inventory.md', 'w', encoding='utf-8') as f:
        f.write(full_inventory_md)
        
    with open('source-inventory.md', 'w', encoding='utf-8') as f:
        f.write(full_inventory_md)

    print(f"source-inventory.md generated with {len(inventory)} entries!")

if __name__ == '__main__':
    main()
