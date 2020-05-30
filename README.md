# remember-me-layer

The aim of this repository is define step by step a compose application.

Considerations:

    When we are deploying containers we have to identify the configuration inside for example aviod use localhost

Commands used:
    
    docker build -t edgar/hapi-app .
    docker run -p 4000:4000 edgar/hapi-app