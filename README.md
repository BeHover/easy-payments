# easy-payments
To start application in development mode:
  1. ```cd client && npm start```
  2. Remove .dist from .env.dist file
  3. Fill .env file with JWT_KEY (any custom string) and CORS_ALLOW_ORIGIN (to allow any origin paste ```^http?://.*?$```)
  4. run ```docker-compose up -d``` or use ```make start```
  5. Visit localhost:8080 and you will see development symfony page
  6. Visit localhost:3000 and you will see frontend
