##Button toggle section for color and height

```
<section>
  <Toggle>
    {({ on, toggle }) => (
      <Fragment>
        <button onClick={toggle}>Show / Hide</button>
        <Transition
          from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
          enter={{ opacity: 1, bg: '#524763', height: '200px' }}
          leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
        >
          {on && Header}
        </Transition>
      </Fragment>
    )}
  </Toggle>
</section>
```


##Manual element dragging feature:
  [+] transform porperty with value 'translate3d(x,y,z)' enables drag:

      ```
      transform: `translate3d(${xDelta}px, ${yDelta}px, 0)`
      ```

  [+] For a single coordinates 'X' (Can only drag horizontally):

      ```
      transform: `translateX(${xDelta}px)`
      ```

  [+] For a single coordinates 'Y' (Can only drag vertically):

      ```
      transform: `translateX(${yDelta}px)`
      ```
