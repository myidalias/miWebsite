import boto3
import os

aws_access_key_id = os.environ['AKIAIL4KBU4YTE7APEFQ'],
aws_secret_access_key = os.environ['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'],
region_name='us-east-1'

polly = boto3.client('polly')
def polly_api(Text):
    polly_parms = polly.synthesize_speech(Text=text,
                                        OutputFormat='mp3',
                                        VoiceId='Joanna')
    polly_response = response['AudioStream'].read()
    file_name = 'polly_voice.mp3'
    with open (file_name, 'wb') as file:
        file.write(polly_response)
        file.close()

if __name__ == '__main__':
    #list = ['','']
    #for text in list:
        polly_api('Betty bought butter, but the butter was bitter. So Betty bought better butter to make her bitter batter better')
