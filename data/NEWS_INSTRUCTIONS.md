# Sample News Data

This file shows the structure for your news items. You can use Excel (.xlsx) or CSV format.

## Column Structure

- **year**: Year of the news item (e.g., 2024)
- **month**: Month abbreviation (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)
- **date**: Optional full date description (e.g., "January 15" or "Spring 2024")
- **title**: Short title for the news item
- **description**: Detailed description of the news
- **link**: Optional external link URL
- **tags**: Comma-separated tags for filtering (e.g., "award, publication, conference")
- **image**: Optional path to image (e.g., "assets/images/news/award.jpg")

## Example Entries

### CSV Format
```csv
year,month,date,title,description,link,tags,image
2024,Oct,,New Position,Started position as Research Scientist at Tech Company,https://example.com,career,
2024,Sep,September 15,Conference Presentation,Presented research at International Conference on AI,https://conference.com,conference,assets/images/news/conference.jpg
2024,Jun,,Award Received,Received Best Paper Award at Machine Learning Conference,,award,assets/images/news/award.jpg
2024,Mar,,Publication,New paper published in Nature Communications,https://doi.org/example,publication,assets/images/news/paper.jpg
2023,Dec,,Grant Awarded,Received NSF Research Grant for project on neural networks,,funding award,
```

## Tips

1. **Tags**: Use consistent tag names for filtering (e.g., always use "award" not "Award" or "awards")
2. **Images**: Place images in `assets/images/news/` folder
3. **Links**: Include full URLs starting with http:// or https://
4. **Order**: Items are automatically sorted by year and month
5. **Excel**: You can also create an Excel file (news.xlsx) with the same column headers

## Creating Your Data File

1. Copy the example above
2. Replace with your own news items
3. Save as `data/news.csv` or `data/news.xlsx`
4. The website will automatically load and display your news

## Common Tags

- award
- publication
- conference
- talk
- media
- funding
- career
- collaboration
- teaching
