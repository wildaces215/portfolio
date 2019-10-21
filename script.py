import os
import sys


def toDirectory():
    os.chdir('dist')
    file = open("_redirect", 'w+')
    file.write('/\t /\n')
    file.write("home\t /home\n")
    file.write("about\t /about\n")
    file.write("contact\t /contact\n")


if __name__ == "__main__":
    toDirectory()
