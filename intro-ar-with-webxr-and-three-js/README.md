# INTRO AR WITH WEBXR AND THREE-JS UDEMY

## SECTION 1: INTRODUCTION TO WEBXR

### 1. Intro to the course

- [XR dinsaurs](https://www.xrdinosaurs.com/)
- [WebXR particles](https://toji.github.io/webxr-particles/)
- [AR model viewer](https://modelviewer.dev/)
- [Google Sodar app](https://sodar.withgoogle.com/)
- [Three.js paint example](https://threejs.org/examples/webxr_ar_paint.html)

### 2. Your first experience with web AR on mobile iOS

- [WebXR Viewer](https://apps.apple.com/us/app/webxr-viewer/id1295998056)
- [ARKit compatible devices](https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html)
- [WebKit](https://webkit.org/status/#?search=webxr)

### 3. Your first experience with web AR on mobile Android

- [ARCore compatibility](https://developers.google.com/ar/devices)

### 4. Your first experience with web AR on desktop

- [WebXR API Emulator](https://chrome.google.com/webstore/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje?hl=en)
- [ARCore compatible devices](https://developers.google.com/ar/devices)

## SECTION 2: THE WEBXR API

### 5. What is the WebXR API?

- [W3C - WebXR Device API](https://www.w3.org/TR/webxr/)
- [W3C Wikipedia](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Immersive web](https://github.com/immersive-web/webxr)
  - [AR hit test](https://storage.googleapis.com/chromium-webxr-test/r991081/proposals/phone-ar-hit-test.html)
  - [WebXR hit test](https://chromestatus.com/feature/4755348300759040)

### 6. What are the benefits of AR on the web?

### 7. How does WebXR work?

**6 degrees of freedom device**
  -> Rastreia a rotação do dispositivo, assim como, a translação. Tendo acesso aos eixos X, Y e Z.

### 8. What is Three.js?

- [Three.js 3D library](https://threejs.org/)

### 9. WebXR application lifecycle

## SECTION 3: CODING YOUR FIRST WEBXR AR APP

### 10. Setting up the developer environment and code examples

- [Glitch.com](https://glitch.com/)
- [Intro to webxr - Glitch](https://intro-to-webxr.glitch.me/)
- [Intro to webxr - Dashboard](https://glitch.com/edit/#!/intro-to-webxr?path=0.basic_scene.html%3A1%3A0)
- [WebXR Academy](https://glitch.com/~intro-to-webxr)

### 11. Creating a basic Three.js scene

Basicamente precisa-se de (scene, camera and renderer)

### 12. Adding a camera to the scene

### 13. Adding a renderer to the scene

### 14. Adding a cube to the scene

### 15. Creating an animation loop

### 16. Three.js coordinate system

### 17. Adding a light to the scene

### 18. Adding a more complex shape to the scene

### 19. Converting the scene to AR using WebXR

## SECTION 4: 3D MODELS IN AR

### 20. Adding 3D objects to the scene

### 21. Animating 3D objects

### 22. Adding a 3D model to the scene

- [Loading 3D model in Three.js](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models)
- [glTF RUNTIME 3D ASSET DELIVERY](https://www.khronos.org/gltf/)
- [KhronosGroup GitHub](https://github.com/KhronosGroup/glTF-Sample-Models)

### 23. Animating a 3D model

- [Three.js MathUtils.degToRad](https://threejs.org/docs/#api/en/math/MathUtils.degToRad)

## SECTION 5: Interactions in AR

### 24. Adding touch gestures

### 25. Hit testing part 1 - Setup

### 26. Hit testing part 2 - Hit test source and reference spaces

Viewer Space
  • Referencia as coordenadas sempre em relação ao telefone, usuário
Local space
  • Referencia as coordenadas sempre onde a interação da sessão iniciou

### 27. Hit testing part 3 - Placing a reticle on a surface

### 28. Hit testing part 4 - Placing virtual objects on surfaces

- [Positioning virtual objects in real-world views](https://web.dev/ar-hit-test/)
- [WebXR Device API - Hit Testing](https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md)
