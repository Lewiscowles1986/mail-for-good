###### Preinstallation

First, keep in mind that this application uses [Amazon SES](https://aws.amazon.com/ses/). Your account will initially be [limited by Amazon](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html). To increase these limits, check out Amazon's documentation [here](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/increase-sending-limits.html).

Before installing this application, you'll need some API keys from Google to handle authentication. This can be done in a few steps:

## Setup local host with TLD
1. If you are running using a docker virtual machine (Mac OSx & Windows), then you'll need the IP address docker binds IP's to. It's fine if it's 127.0.0.1, but if not, you'll need to know the correct IP address.
2. Google no longer allow localhost, but you can edit your hosts file using the IP Address from the prior point, to point at dockerhost.com. [Saved search using Duck-duck-go](https://lmddgtfy.net/?q=edit%20hosts%20file)
> NOTE: The important part here is that you get a host with a top-level domain. You can absolutely use ngrok or setup your pi-hole to point at it. I chose to mention hosts file override as all OS's have them.

## Proceed to setup Google API Account
1. Login to [Google API Manager](https://console.developers.google.com/apis/).
2. Choose **Select a project** on the top left dropdown. Click on the **+** to create a new project, `mail-for-good` or (select it you have created it before). 
3. In the left menu, select **Dashboard**. Now select **Enable API**, search for `Google+` and select it. At the top of the screen, ensure it's enabled by clicking on **Enable**.
4. In the left menu, select **Credentials**. Then click **Create Credentials** > **OAuth client ID**.
5. Select **Web Application**. Name is as you wish, but under **Authorised Javascript Origins** put `http://dockerhost.com`, and under **Authorised redirect URIs** put `http://dockerhost.com/auth/google/callback`.
6. Click **Create**. You will now have a Client ID and Client Secret. In your .env file, put the Client ID as your GOOGLE_CONSUMER_KEY, and the Client Secret as your GOOGLE_CONSUMER_SECRET.
> NOTE: You can actually create a user in the database directly, but it's undocumented. PR's welcome!

###### Installing with Docker

The first step is to download Docker itself. The process for this differs depending your OS. You can find a guide here https://docs.docker.com/engine/installation/.
Don't forget to also install docker-compose. You should be able to find it on the docker docs link above. [Saved search using Duck-duck-go](https://lmddgtfy.net/?q=install%20docker-compose)

Now, clone the repository and change into it.

Edit the `.env.example` file in your root directory.

After this, you'll need to create your own .env file. Check out the .env.example file in this repo. From the terminal, you can run `cp .env.example .env` then edit the .env file with any editor of your choice. There are instruction in this file that you can follow.

Now run `sudo docker-compose up`. This will run all the containers needed to launch this app, and will take some time to finish.

When the process is finished, the app will be exposed on port 80 and accessible by visiting `http://dockerhost.com`.

> NOTE: After you've built the application, it will contain a copy of your source code. You will have to rebuild the docker container in order to get edits you make locally show up in the app.

###### Installation summary

1. Install and run the Docker daemon.
2. Clone the repository and change into it `git clone https://github.com/freeCodeCamp/Mail-for-Good && cd Mail-for-Good`.
3. Run `cp .env.example .env` then open `.env` and edit it, passing in your own values.
4. Run `sudo docker-compose up`. Wait for it to finish.
5. Visit `http://[hostname]:8080` or `localhost` if running locally.
