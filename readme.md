# Tiny Express Example
This micro-express app merely creates two routes, and responds with some data from each one.

## N-Layer-Architecture
The idea of a layered architecture is to structure your application into "layers" as a concept. These layers determine how the application's logic "flows" through the app.

The layers aren't actual things, written in code, but rather conceptual rules which makes it easier for you to manage the complexity of your application.

In this very compressed example, we have the following requirement:

```text
Data for each request should be available for all endpoints, as some control-flow may depend on this data.
```

So, let's draw out the lines of our express app:

**Layer 1** 

Layer 1 is our Express API, the entry-point to this layer will be external HTTP calls, which means any `app.get|post|put|delete()` method.

**Layer 2**

Layer 2 will be a concept we call `services`

The general rule for services is that they may only be utilized inside of an express callback, and each is responsible for a single action.

This means that if any express route requires the same data, they can share this data via utilizing the same service.

**Notice:** These layers I've introduced, aren't by any means standard. What is important to note here, is the method of applying the concept of layers so help you organize your code, rather than trying to memorize my specific definition in this example.

### Mocked Service
We do not have any actual database, so I've just written some dummy functions inside of `ervice-example.js` which returns promises, so that we can mock the async nature of web requests.
