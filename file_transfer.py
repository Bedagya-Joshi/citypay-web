from flask import Flask, send_file

app = Flask(__name__)

# Define the directory where the file is stored.
file_directory = 'C:/Users/bedag/Downloads/WindowsVM/'
file_name = 'WinDev2311Eval.ova'
# file_name2 = 'home.exe'  # Replace with your actual file name.

@app.route('/')
def download_file():
    return send_file(file_directory + file_name, as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8088, threaded=True)
