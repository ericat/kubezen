Build image and run:
```
docker build -t kubezen .
docker run -p 3000:3000 --name kubezen kubezen
```

Steps
```
minikube start
eval $(minikube docker-env)
eval $(docker-machine env -u)
kubectl create -f config/
minikube service kubezen --url
```
