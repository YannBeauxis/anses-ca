import urllib.request as request
from io import BytesIO
from pathlib import Path
import json

import pandas as pd

url = "https://www.anses.fr/system/files//Tableau-recapitulatif-plantes-complements-alimentaires-juin-2023.xlsx"
sheet_name = "Recos EMA synthèse"
data = request.urlopen(url)
df = pd.read_excel(BytesIO(data.read()), sheet_name=sheet_name, header=8)

Path("src/data/rows.json").write_text(df.to_json(orient="records"))
