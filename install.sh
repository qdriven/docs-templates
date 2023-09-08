git clone https://github.com/qdriven/docs-templates.git --depth=1
cd docs-templates
rm -rf README.md
rm -rf .git
cd ../
mv docs-templates/* .
rm -rf docs-templates