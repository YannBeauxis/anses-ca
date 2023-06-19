.PHONY: install
install:
	poetry install --no-root
	npm install


.PHONY: extract_data
extract_data:
	poetry run python extract_data.py


.PHONY: publish
publish:
	npm run build
	surge build/ anses-ca.surge.sh
