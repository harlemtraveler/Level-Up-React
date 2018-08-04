## Button toggle section for color and height

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
