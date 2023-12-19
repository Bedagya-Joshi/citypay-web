import pyautogui
import time

def type_text(text):
    for char in text:
        if char.isalpha():  
            if char.isupper():
                pyautogui.keyDown('shift') 
                pyautogui.typewrite(char)
                pyautogui.keyUp('shift') 
            else:
                pyautogui.typewrite(char)
        else:
            pyautogui.press(char)  
            time.sleep(0.1)

# Example usage:
text_to_type = '''
 preparing 128 different battlefields and killing Railgun 128 times, Accelerator will be able to evolve into a Level 6. As it is impossible to prepare 128 Railguns, we have set our eyes upon the Level 5 Mass Production Project, 'Sisters', progressing in parallel.
'''
time.sleep(3)
type_text(text_to_type)
