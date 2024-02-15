//my solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let x = args[0];
      for (let i = 0; i < args.length; i++){
        if (args[i] < x){
          x = args[i];
        }
      }
      return x;
    }
  }

  //better solution:
  class SmallestIntegerFind {
    smallestInt(args) {
        return Math.min(...args)
    }
  }