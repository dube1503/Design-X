# Formats .csv file info of everyones site data to output as HTML
import csv

def makeHTML(line):
    return '<a class="photo {}" href="{}"><h3>{}</h3></a>'.format(*line[::-1])

with open('ExitURL.csv', newline='') as csvfile:
    line = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in line:
        row = [value.replace('"','') for value in row]
        print(makeHTML(row),'\r')
