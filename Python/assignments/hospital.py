class Patient(object):
    def __init__(self,id,name,allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed_number = 0
        self.patient_obj()


    def patient_obj(self):
        return {"id":self.id, "name":self.name, "allergies":self.allergies , "bed_number":self.bed_number}


x = Patient("0001","Todd","None")

class Hospital(object):
    def __init__(self,patients,name,capacity):
        self.patients = [patients]
        self.name = name
        self.capacity = capacity

    def admit(self,patient):
        if len(self.patients) >= self.capacity:
            print "Hospital is full!"
        else:
            self.patients.append(patient)
            patient.bed_number = len(self.patients)
            print patient.bed_number
            print "Admitted!"
        return self.patients

    def discharge(self,patient):
        for i in range(len(self.patients)-1):
            if self.patients[i].name == patient:
                self.patients.pop(i)
                print "Good news",patient,"you're all better, get out of here so we can use this bed."
                Patient.bed_number = 0
                return self.patients
            elif i == len(self.patients)-1:
                print "Patient has already left or he wasn't here!"
        return self.patients

    def display_hos(self):
        print "Hospital Name:",self.name
        print "Capacity Limit:", self.capacity
        print "Current Number of Patients:", len(self.patients)
        for i in range(len(self.patients)):
            print "Patient Name:",self.patients[i].name
        return self


y = Hospital(x,"Mercy Gilbert",3)
y.display_hos()

print "================================="
z = Patient("1411","Abby","Tomato")
y.admit(z)
y.display_hos()
print "================================="
y.admit(Patient(002,"Fred","Cats"))
y.display_hos()
print "================================="
a = Patient("5421","Ernie","Bees")
y.admit(a)
y.display_hos()

print "================================="

y.discharge("Abby")
y.display_hos()

# output:
# =================================
# Hospital is full!
# Hospital Name: Mercy Gilbert
# Capacity Limit: 3
# Current Number of Patients: 3
# Patient Name: Todd
# Patient Name: Abby
# Patient Name: Fred
# =================================
# Good news Abby you're all better, get out of here so we can use this bed.
# Hospital Name: Mercy Gilbert
# Capacity Limit: 3
# Current Number of Patients: 2
# Patient Name: Todd
# Patient Name: Fred
