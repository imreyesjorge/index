---
# layout: ../../layouts/Post.astro
title: Who can you become?
author: reyes
pubDate: 2023/01/17
tags: ["personal"]
---

<style>
  #audio-btn {
    margin: 2rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

    position: fixed;
    top: 0; 
    right: 0;
  }
</style>

<button id="audio-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg></button>

Modern life demands so much of our attention, from the chaotic movement that our cities see every day to our social media feeds that overwhelm us with a toxic amount of either the bad things happening in our world or the good life that everyone else is living but us.

It is not surprising to find out that [social media may cause depression](https://www.healthline.com/health-news/social-media-use-increases-depression-and-loneliness); if almost everything we see there is curated material, our friends will not upload their bad photos; they select only the best ones. Can’t you recall a moment when a friend arranged the table just to take the best picture to share?

The point is that we tend to compare ourselves, and seeing what someone else has accomplished can make us feel left behind.

Stop comparing yourself to others; you have no idea how much time they spent honing their craft. You might feel left behind if you don't accomplish something in four months that others do in four years.

Also, don’t believe everything you see on social media; most people don’t have a perfect life, and we’re all struggling with something. **We just tend to share what we want others to see**.

## Your actual self doesn’t determine who you can become.

Let’s say you are bad at something. Well, this doesn’t determine either your future ability or your life at all, but sometimes we tend to believe that we’re bad at something out of fear of trying or failing.

Don’t worry; failing isn’t a bad thing, and it’s actually necessary to grow. Be afraid no more of starting your drawing journey, your psychology career, or anything that you desire, but be prepared to fail—a lot. If you don’t start and practice, how can you become the person you want to be?

> The thing is, **almost everyone who is good at something has a lot of practice behind them**.

Sure, some are born with a special trait, but there’s still a path of practice to follow for them too. Life isn’t fair, and some people may have a harder time achieving their desired ability level, but **this doesn’t mean that they can’t achieve it**.

If you’re going to compare yourself, do it with your past self. You'll be surprised at how much you've changed in a year. In fact, I believe that trying to be better than yesterday’s version will lead you to growth you've never seen before.

What I want to say is that, despite the prognostication, whatever your goal is, pursue it. You’ll need to have patience and practice a lot, but eventually it’s much more likely that you can achieve your goal, so this is a path worth trying.

I hope you realize that you’re becoming the best version of yourself.

<script>
  const click = new Audio('/click.mp3');
  const backgroundMusic = new Audio('/medley.mp3');
  let isPlaying = false;

  const backgroundMusicButton = document.getElementById('audio-btn');


  backgroundMusicButton.addEventListener('click', () => {
    click.load();
    click.play();
 
  if (isPlaying) {
    backgroundMusic.pause();
    isPlaying = false;
    backgroundMusicButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>';
  } else {
    backgroundMusic.play();
    isPlaying = true;
    backgroundMusicButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
  }
  });
</script>
