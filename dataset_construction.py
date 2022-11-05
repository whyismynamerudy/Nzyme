import glob
import pandas as pd
import numpy as np


article_files = glob.glob("BBC News Summary/BBC News Summary/News Articles/tech/*.txt")
summary_files = glob.glob("BBC News Summary/BBC News Summary/Summaries/tech/*.txt")

df_initial = [[], []]

for file in article_files:
    with open(file) as f:
        df_initial[0].append(f.readlines())

for file in summary_files:
    with open(file) as f:
        df_initial[1].append(f.readlines())

df_initial = np.array(df_initial).T

df = pd.DataFrame(df_initial, columns=["Article", "Summary"])

df.to_csv("out.txt")
