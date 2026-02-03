import win32com.client
import json
import time
import random
import os

# --- CONFIG ---
ACCOUNTS_FILE = 'accounts.json'
TARGET_EMAIL = "kestutis@ccgsitespark.com"

# --- TEMPLATES ---
def get_subject():
    templates = [
        "{Question|Inquiry} about {website|web design} {prices|quote}",
        "{New|Upcoming} project: {Redesign|New Site|Landing Page}",
        "{Quote|Proposal} needed for {small business|local business} {site|website}",
        "Do you {work on|handle} {Shopify|WordPress|custom} sites?",
        "{Looking for|Need} a {web designer|developer} to help",
        "Website {update|refresh} {inquiry|question}",
        "{Contact|Message} from {site|contact form}",
    ]
    text = random.choice(templates)
    return spin(text)

def get_body():
    templates = [
        "{Hi|Hello},\n\nI {found|saw} your {portfolio|work} and {wanted to|would like to} ask about {pricing|rates}. I have a {small|medium} project for a {local|new} business. {Let me know|Please tell me} if you have availability.\n\n{Thanks|Best},",
        "{Hi|Hey} Kestutis,\n\n{Are you|Do you} currently taking on {new projects|new clients}? I need a {landing page|5-page site} for my {consulting|cleaning|construction} business. {What is|Can you give me} a rough estimate?\n\n{Cheers|Thanks},",
        "{Hello|Hi there},\n\nWe {urgently|need to} update our {old|outdated} website. It's built on {WordPress|Wix} right now. {Can you help|Are you available} with this?\n\n{Best regards|Sincerely},",
        "{Good morning|Hi},\n\nI'm {looking for|seeking} a {professional|reliable} web designer. {How much|What is the cost} for a {basic|standard} {corporate|business} website? {Looking forward to|Hope to} hear from you.\n\n{Best|Regards},",
    ]
    text = random.choice(templates)
    return spin(text)

def spin(text):
    while '{' in text and '}' in text:
        start = text.find('{')
        end = text.find('}')
        if start == -1 or end == -1: break
        
        block = text[start:end+1]
        content = text[start+1:end]
        choices = content.split('|')
        choice = random.choice(choices)
        
        text = text.replace(block, choice, 1)
    return text

def main():
    print("🔥 Outlook Desktop Warming Bot Started...")
    
    if not os.path.exists(ACCOUNTS_FILE):
        print(f"❌ {ACCOUNTS_FILE} not found!")
        return

    with open(ACCOUNTS_FILE, 'r') as f:
        accounts = json.load(f)

    # Connect to Outlook
    try:
        outlook = win32com.client.Dispatch("Outlook.Application")
        namespace = outlook.GetNamespace("MAPI")
    except Exception as e:
        print("❌ Could not connect to Outlook. Is it installed?")
        print(e)
        return

    # List all available accounts in Outlook
    outlook_accounts = {acc.SmtpAddress.lower(): acc for acc in namespace.Accounts}
    print(f"Found {len(outlook_accounts)} accounts in your Outlook App.")

    for user_acc in accounts:
        email = user_acc['user'].lower()
        
        if email not in outlook_accounts:
            print(f"⚠️ Skipping {email} (Not found in Outlook Desktop App)")
            continue

        print(f"🚀 Sending from: {email}...")
        
        try:
            mail = outlook.CreateItem(0) # 0 = MailItem
            mail.SendUsingAccount = outlook_accounts[email]
            mail.To = TARGET_EMAIL
            mail.Subject = get_subject()
            mail.Body = get_body()
            
            # Send
            mail.Send()
            print(f"✅ SENT from {email}")
            
        except Exception as e:
            print(f"❌ Error sending from {email}: {e}")

        # Wait
        wait_time = random.randint(45, 90)
        print(f"⏳ Waiting {wait_time}s...")
        time.sleep(wait_time)

if __name__ == "__main__":
    main()
