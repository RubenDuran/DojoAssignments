# pip install python-whois
import whois


def find_privates(domList):

    domainList = domList.split()
    emailList = []
    for d in domainList:
        domain = whois.whois(d)
        print("the email", domain.emails)
        # try:
        email_domain = domain.emails[1].split('@')
        # except:
        #     email_domain = domain.emails[0].split('@')
        try:
            emailList.append([d, email_domain[1]])
        except:
            emailList.append([d, email_domain[0]])
        print("~~~~~", emailList)
    matchers = ['domainsbyproxy.com', 'domaindiscreet.com', 'privacy',
                'hugedomains.com']
    matching = [s for s in emailList if any(xs in s for xs in matchers)]
    # print("~~~~~~~", matching)
    print([x[0] for x in matching])
    return([x[0] for x in matching])


# find_privates("rubenduran.com guppyandme.com frank.com")


f = open('../../../../../../Desktop/ParsingList.txt', 'r+')
text = f.read()
text = find_privates(text)
f.seek(0)
f.write('\n'.join(text))
f.truncate()
f.close()
