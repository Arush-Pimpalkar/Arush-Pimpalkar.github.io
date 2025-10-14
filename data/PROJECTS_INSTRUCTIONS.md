# Sample Projects Data

This file shows the structure for your projects and publications. You can use Excel (.xlsx) or CSV format.

## Column Structure

- **title**: Project or publication title
- **authors**: List of authors (use your preferred format)
- **year**: Publication or project year
- **venue**: Conference, journal, or project type
- **description**: Brief description or abstract
- **link**: Link to paper, project page, or GitHub
- **pdf**: Optional direct link to PDF
- **code**: Optional link to code repository
- **video**: Optional link to video or demo
- **image**: Path to project image (e.g., "assets/images/publications/project.jpg")
- **type**: Project type for filtering (e.g., "Publication", "Preprint", "Project", "Thesis")
- **tags**: Comma-separated tags (e.g., "machine learning, computer vision, robotics")
- **featured**: Set to "yes" or "1" to feature prominently

## Example Entries

### CSV Format
```csv
title,authors,year,venue,description,link,pdf,code,video,image,type,tags,featured
Deep Learning for Medical Image Analysis,Your Name et al.,2024,Nature Medicine,Novel approach to medical image segmentation using deep learning techniques.,https://example.com,https://example.com/paper.pdf,https://github.com/yourusername/project,,assets/images/publications/medical-ai.jpg,Publication,"machine learning, medical imaging, deep learning",yes
Robotics Control System,Your Name and Collaborator,2023,IEEE International Conference on Robotics,Developed novel control algorithm for robotic manipulation.,https://conference.com,,,https://youtube.com/watch?v=example,assets/images/publications/robot.jpg,Publication,"robotics, control systems",
Open Source Tool for Data Analysis,Your Name,2023,GitHub,Created open-source Python library for scientific data analysis.,https://github.com/yourusername/tool,,https://github.com/yourusername/tool,,assets/images/publications/tool.png,Project,"software, data science, python",
Understanding Neural Networks Through Visualization,Your Name,2024,arXiv,Preprint exploring interpretability of neural network architectures.,https://arxiv.org/abs/example,https://arxiv.org/pdf/example.pdf,,,assets/images/publications/neural-viz.jpg,Preprint,"machine learning, interpretability",
Master's Thesis: Computer Vision Applications,Your Name,2022,University Repository,Comprehensive study of computer vision techniques for real-world applications.,https://repository.edu/thesis,https://repository.edu/thesis.pdf,,,assets/images/publications/thesis.jpg,Thesis,"computer vision, thesis",
```

## Tips

1. **Authors**: Format consistently (e.g., "First Last, First Last" or "Last F., Last F.")
2. **Images**: Place in `assets/images/publications/` folder
3. **Types**: Common types include:
   - Publication (peer-reviewed papers)
   - Preprint (arXiv, bioRxiv, etc.)
   - Project (software, tools, demos)
   - Thesis (Master's, PhD dissertations)
   - Patent
   - Book Chapter
4. **Tags**: Use consistent, lowercase tags for better filtering
5. **Featured**: Mark your most important works as featured
6. **Links**: Provide DOI links when possible for publications

## Project Types

Choose from these standard types or create your own:
- **Publication**: Peer-reviewed conference or journal papers
- **Preprint**: Pre-publication manuscripts
- **Project**: Software, tools, demos, or other projects
- **Thesis**: Academic theses or dissertations
- **Patent**: Filed or granted patents
- **Book Chapter**: Book contributions
- **Workshop**: Workshop papers or presentations
- **Poster**: Conference posters

## Common Tags

- machine learning
- deep learning
- computer vision
- natural language processing
- robotics
- human-computer interaction
- data science
- software engineering
- web development
- mobile development
- security
- networking
- databases

## Creating Your Data File

1. Copy the example above
2. Replace with your own projects
3. Save as `data/projects.csv` or `data/projects.xlsx`
4. The website will automatically load and display your projects
