# Javascript Test Template

Project boilerplate for testing javascript components. Perfect for quick setup
of coding katas. Sample setup for Node modules using [Mocha](https://mochajs.org/)
as test framework and Node's [assert](https://nodejs.org/api/assert.html)
module.

Run tests with:

```
npm test
```

## Examples

### Asynchronous code

Use `done()` callback for testing asynchronous code:

```
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
```
