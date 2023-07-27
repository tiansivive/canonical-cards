

export type PostWP = {
    title: { rendered: string },
    link: string,
    type: string,
    excerpt: { rendered: string },
    featured_media: string,
    date: string,
    _embedded: {
        "wp:featuredmedia": Array<{ title: { rendered: string } }>
        author: Array<{ name: string, link: string }>
    }
}

export type Post = {
    title: string,
    link: string,
    type: string,
    author: { name: string, link: string },
    media: { title: string, imgUrl: string },
    date: string

}
export type Data = Post[]
export type Raw = PostWP[]