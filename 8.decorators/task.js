function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.find(item => item.hash === hash); 
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.value);
          return ("Из кэша: " + objectInCache.value);
      } 
        let value = func.call(this, ...args); 
      cache.push({hash, value}) ;
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + value);
      return "Вычисляем: " + value;

        
  }
  return wrapper;
 
}

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecoratorNew(func) {
  let nextCall = true;
  let interval;
  function wrapper(...args) {
    wrapper.allCount += 1;
    if (nextCall) {
      func(...args);
      nextCall = false;
    }
    clearTimeout(interval);
    interval = setTimeout(() => {
      func.call(this, ...args);
      wrapper.count += 1;
      nextCall = true;
    }, 3000);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}

