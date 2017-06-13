import urllib2
import re
from bs4 import BeautifulSoup

trucks_url = [
    "https://www.monsterjam.com/en-US/trucks",
    "https://www.monsterjam.com/en-US/trucks?page=1",
    "https://www.monsterjam.com/en-US/trucks?page=2"
    ]
trucks = []
truck_imgs= []

for truck in trucks_url:

    req = urllib2.Request(truck, headers={'User-Agent' : "Magic Browser"})
    soup = BeautifulSoup(urllib2.urlopen( req ), "lxml")
    all_trucks=soup.find_all(name='span', class_='field-content')
    for truck in all_trucks:
        name=truck.get_text()
        trucks.append(name)

    all_truck_imgs=soup.find_all('div', class_='field-content',)
    for truck in all_truck_imgs:
        truck_imgs.append(truck.find('img')['src'])


truck_img_and_name = []
if len(trucks) != len(truck_imgs):
    del truck_imgs[len(trucks):]

for i in range(len(trucks)):
    temp=[trucks[i], truck_imgs[i]]
    truck_img_and_name.append(temp)

print truck_img_and_name
