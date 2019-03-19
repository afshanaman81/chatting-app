A micro-service based architecture for a chatting app like whatsapp. 

This application will be deployed in Kubernetes as docker images (one for each micro-service)

Keywords:
microservie architecture
API Gateway
Load Balancer
Websockets
Peer-to-Peer communication (not HTTP / IP)

Docker, Kubernetes
Heartbbeat

Considerations
maximize websockets connection at the Gateway 
minimize any processing at the Gateway
Remember: HTTP is client-to-server communication
To do a server to client communication, we need Websockets


https://itnext.io/building-a-node-js-websocket-chat-app-with-socket-io-and-react-473a0686d1e1

https://www.nginx.com/blog/5-performance-tips-for-node-js-applications/

https://www.lunchbadger.com/blog/build-load-balancer-express/