



#This code will give you the daily avrage 
# save the hourly data you have as seperate csv file of 2 column (DT, polltant name)
#just change the imported and saved file names (the station ID)
# The code saves each file seperatly, then you can manually have it in one excel file. 


import pandas as pd 
import sys
import fileinput
import csv





#data = csv.reader(sys.stdin, delimiter=',')

data =pd.read_csv(sys.argv[1] ,parse_dates=['DT'])
data.head()
data.dtypes

# Find the daily average for Pullutant type (check the pollutant name first from the hourly file and add it here)
DAVG=data.groupby([data["DT"].dt.year, data["DT"].dt.month, data["DT"].dt.day])['CO','SO2','NO2'].mean()
DAVG.head()
DAVG.dtypes
DAVG.to_csv('/Users/jumana/code/AQ/test/DAVG_17C.csv', sep='\t')
print(DAVG.to_json())
sys.stdout.flush()
# Now go fix the open the file on Excel (Data=>Text to column=> next next finish => name the colomn if nesessary => save as csv and do the next steps)

# # find the median of these days 
# #copy th values manually to an external sheet 
# data2 =pd.read_csv("/Users/jumana/code/AQ/Dailyavg/DAVG_17C.csv",parse_dates=['DT'])
# the24mean=pd.DataFrame(data2[['CO','SO2','NO2']]).median()
# the24mean.head()




# 'SO2',
# 'CO','SO2',