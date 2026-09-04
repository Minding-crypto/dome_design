import InfiniteMenu from './InfiniteMenu'

const items = [
  {
    image: 'https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: '667777',
    description: 'Whats this bruh?'
  },
  {
    image: 'https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'Cooked?'
  },
  {
    image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'Tuff'
  },
  {
    image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
    link: 'https://google.com/',
    title: 'Item 4',
    description: '6777777'
  }
]

function App() {
  return (
    <div className="app">
      <InfiniteMenu items={items} />
    </div>
  )
}

export default App