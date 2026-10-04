import { useRef,useState } from 'react'
import './app.css'


function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    else{
      audioRef.current.play()
      setIsPlaying(true)
    }
    
  }
  return (
    <div className="website">
      
      <nav className="navbar">

        <h2 className="logo">
          J ❤️ R
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#memories">Memories</a>
          <a href="#letter">Letter</a>

          <button className="music-button" onClick={toggleMusic}>
        {isPlaying ? '⏸ Pause Song' : '🎵 Play Our Song'}
      </button>
        </div>

      </nav>
      <audio ref={audioRef} src="/song.mp3" />


      <section id="home" className="hero">

        <p className="small-text">
          A Little Surprise for you....
        </p>

        <h1>
          Happy Birthday Raju Kuttu....
        </h1>

        <p className="hero-text">
          To the man who made my world more beautiful, my heart
          more complete, and my life more meaningful.
        </p>

        <a href="#story" className="button">
          Our Story!
        </a>

      </section>


      <section id="story" className="sectionStory">

        <p className="section-label">
          OUR JOURNEY
        </p>

        <h2>
          From Us to Forever
        </h2>

        <p className="section-text">
          Every love story is special but our's is very special!!!!
        </p>

        <div className="storyCard">

          <h3>
            OUR STORY
          </h3>

          <p>
            June 1, 2025 — the most important day of my life, a day I will cherish forever.

It was the day we met at the temple. I was really nervous, confused, and a little scared, wondering whether this would actually work or not. But I left the temple with a happy smile on my face.

That evening, when I reached Salem, I sent you a request from my account. And when I switched to my other account, you had already sent me a request. I was desperately looking for a reason to text you. Finally, with all the fear and nervousness in my heart, I gathered the courage to text you… and that’s how our conversations began.

I still remember the way I blushed when you told me “I love you” for the first time. I hope you remember that video too. ❤️

And then came another special moment — our first call, on June 2 at 8:32 AM. I could literally feel my heart beating so loudly. Slowly, we started becoming closer and closer.

I would wait the whole week just for Friday to come. It was the happiest day of my week. And Monday? The saddest day of my week. 😂

Days passed happily, along with little fights and mistakes that helped me understand you much better. Of course, life and love are incomplete without a few mistakes and fights. They taught us, changed us, and brought us even closer.

And then we finally reached our day — October 27th. ❤️

Usually, girls cry when they leave their homes. To be honest, I was a little sad too. But more than the sadness, there was another thought running through my mind:

“Happa! Inime namma life-la thaniya irukka maatom… walls paathu pesa vendam, bathroom poi yaarkum theriyaama azhuga vendam… we got a person! Yayyy!”😂❤️

That was the biggest thought in my mind.

And from that day, we started building our life together, happily.

More than being your wife, I slowly started becoming your little child. ❤️

I know one of my small actions hurt you a lot. For that, I am truly, truly sorry. I promise you that I will never hide anything from you again.

Thank you for choosing me.
Thank you for being with me through every situation.
Thank you for accepting me, understanding me, and being there for me.

Thank you for being you. ❤️

And FYI… this is your 30th birthday! 😂
You are officially almost an uncle now. 🤭

So please take care of me, brooo! 😂❤️

Happy 30th Birthday, my love.
Here’s to all the memories we've made, all the memories waiting to be created, and a lifetime of being annoying, loving, fighting, laughing, and growing old together.

I love you. ❤️

          </p>

        </div>

      </section>


      <section id="memories" className="memoriesSection">

        <p className="section-label">
          OUR MEMORIES
        </p>

        <h2>
          Moments I want forever
        </h2>

        <p className="sectionText">
          Some memories become Moments
        </p>

        <div className="memory-container">

          <div className="Memory-card">

            <div className="Photoplaceholder">
              <img src="/card1.jpg" alt="Our Beginning" />
            </div>

            <h3>
              OUR BEGINNING
            </h3>

            <p>
              The day we met, two strangers became a little less strange and a little more connected. From our very first words to that unforgettable moment, something beautiful began to unfold. Little did we know that this one meeting would become the beginning of our forever — the first page of a love story that I will cherish for the rest of my life. ❤️
            </p>

          </div>


          <div className="Memory-card">

            <div className="Photoplaceholder">
               <img src="/card2.jpg" alt="Our Fav" />
            </div>

            <h3>
              OUR FAVOURITE MOMENT
            </h3>

            <p>
              After our engagement, Fridays were never just Fridays anymore. Every Friday became something I would wait for throughout the entire week. It was my happiest day—the day that made my whole week feel complete. ❤️ Somehow, you turned an ordinary Friday into something I would look forward to with a smile, just because it meant I got to spend that time with you.

            </p>

          </div>


          <div className="Memory-card">

            <div className="Photoplaceholder">
              <img src="/card3.jpg" alt="Our Beginning" />
            </div>

            <h3>
              OUR LITTLE FAMILY
            </h3>

            <p>
             And then came July 6 2026—the day our love story became even more beautiful. ❤️

It was no longer just you and me. We became three.

Our little baby came into our lives and gave our love a whole new meaning. The tiny little person who was created from our love became the most precious part of our world.

From two people who once met at a temple to three hearts sharing one little world… I think that is the most beautiful chapter of our story.

Our two became three, and our little family became my biggest happiness. ❤️

            </p>

          </div>

        </div>

      </section>


      <section id="letter" className="letter-section">

        <p className="section-label">
          A LETTER FOR YOU...
        </p>

        <div className="letter-card">

          <p>
            My Kuttu,
          </p>

          <p>
            There are some people who enter our lives and slowly become a part of our everyday world. And then there are people who become so deeply woven into our hearts that life feels impossible to imagine without them.

For me, that person is you.

Loving you has taught me that love isn't always about grand gestures or perfect moments. Sometimes, it's in the smallest things—the comfort of knowing you're there, the silly conversations, the looks we exchange without saying anything, and the feeling of having someone beside you through every kind of day.
          </p>

          <p>
           You have seen so many versions of me. The happy me, the emotional me, the stubborn me, the overthinking me, and probably the most annoying version too. 😂 Yet somehow, you continue to be the person I want beside me.

With you, I've learned that a relationship isn't about being perfect. It's about two imperfect people choosing to understand each other, forgiving each other, growing together, and continuing to hold on.

There are days when I may not say it enough, but I notice everything.

I notice the little things you do.
I notice the ways you care.
I notice the sacrifices you make.
I notice the love you give without expecting anything in return.
          </p>

          <p>
           And I hope you know how much those things mean to me.

You have given me more than a relationship. You have given me countless moments that I will carry in my heart for the rest of my life.

And now, when I look at our little world, I realize how beautifully life has changed. We have created something that belongs only to us—a home filled with memories, laughter, responsibilities, and a tiny little person who has made our hearts even bigger. ❤️

I don't need a perfect life.

I just want a life where we keep finding our way back to each other.

I want to laugh with you when we're old and look back at all the ridiculous things we worried about.

I want to collect thousands of ordinary days with you until they become our greatest memories.

I want to watch you become older while secretly complaining that you're getting old. 😂
          </p>

        <p>
          And most importantly, I want our little girl to grow up knowing that her parents loved each other deeply, even through all the imperfect moments.

You are one of the most beautiful parts of my life, and no matter how many birthdays come and go, I hope you always remember this:

Somewhere in this huge world, there is a girl whose heart feels safest when it is with you.

And that girl is me. ❤️

Happy Birthday, my love.

May this new chapter bring you everything your heart deserves.

And if life gives me the choice again and again, I will still want to experience all of it with you.
</p>
<p>
I love you more than I know how to put into words. ❤️
        </p>

          <p className="signature">
            Forever Yours,
          </p>

          <p>
            Janu Rajesh
          </p>

        </div>

      </section>


      <footer className="footer">

        <p>
          Made with all my Love
        </p>

        <p>
          Happy Birthday Raju Kuttuu...
        </p>

      </footer>

    </div>
  )
}

export default App