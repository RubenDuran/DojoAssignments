class Call(object):

    def __init__(self, id, caller_name, caller_phone, time_of_call, reason):
        self.id = id
        self.caller_name = caller_name
        self.caller_phone = caller_phone
        self.time_of_call = time_of_call
        self.reason = reason


    def display(self):
        print "Unique Id:", self.id
        print "Caller Name:", self.caller_name
        print "Caller Phone:", self.caller_phone
        print "Time of Call:", self.time_of_call
        print "Reason:", self.reason
        return self

    def gen_call_obj(self):
        return  {"id": self.id,
                "caller_name":self.caller_name,
                "caller_phone": self.caller_phone,
                "time_of_call": self.time_of_call,
                "reason": self.reason,
                }

x = Call("abc123", "Rudy", "6265557788", "8:30AM", "Tech Support")
# x.display()
# output
# Unique Id: abc123
# Caller Name: Rudy
# Caller Phone: 6265557788
# Time of Call: 8:30AM
# Reason: Tech Support


class CallCenter(object):

    def __init__(self, calls):
        self.calls = calls
        self.queue_size = len(self.calls)

    def add_call(self, call):
        self.calls.append(call)
        return self.calls

    def remove(self):
        self.calls.pop(0)
        return self.calls

    def info(self):
        for i in range(len(self.calls)):
            print self.calls[i]['caller_name']
            print self.calls[i]['caller_phone']
            print
        print "There is currently {} calls in queue.".format(len(self.calls))


que_list = [{"id": "abc123",
             "caller_name": "Rudy",
             "caller_phone": "6265557788",
             "time_of_call": "8:30AM",
             "reason": "Tech Support",
             },
            {
            "id": "xyz098",
            "caller_name": "Frank",
            "caller_phone": "9093332211",
            "time_of_call": "12:00PM",
            "reason": "Sales",
            }
            ]

z = CallCenter(que_list)
z.info()
z.add_call(Call("wrt456", "Abby", "4801117700", "11:38AM", "Tech Support").gen_call_obj())
z.info()
z.remove()
z.info()

# Rudy
# 6265557788
# Frank
# 9093332211
# There is currently 2 calls in queue.
# Rudy
# 6265557788
# Frank
# 9093332211
# Abby
# 4801117700
# There is currently 3 calls in queue.
# Frank
# 9093332211
# Abby
# 4801117700
# There is currently 2 calls in queue.
