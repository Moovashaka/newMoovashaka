import React from 'react'
import BlogNav from './BlogNav.js'
import Footer from './Footer.js'

export default class Progressivewebapps extends React.Component {
  render () {
    return (
    <div>
    <div>
      <BlogNav />
      </div>
<section>
<div className="container">
<h2> What is  a Progressive WebApp?</h2>
<h3>Background</h3>
<p>As jaw-droppingly remarkable as it now seems, in June of
1993 there were as little as 130 web pages; in 2019 this
figure stood at 1.9 billion plus, although in recent years
the rate of increase has slowed somewhat – the reason?
Certainly a factor has been the burgeoning popularity
of the App. </p>
<h3>Back to the future</h3>
<p>The App too has been around for years, going back to
around 1993 and Apple's Newton, which was followed a few
years later by US Robotics 'Palm' branded Pilot, which even
had its own software development kit, meaning anyone with a
knowledge of code could make their own Apps. So at its core
an App is essentially just a piece of software designed to
run on a specific device.</p>
<h3>Lets get Appy</h3>
<p>The use of the term 'App' really came into its own with the
launch in July 2008 of Apple's App Store, releasing 552 Apps in one day,
including 135 free to download, and by 2010 'App' was one of the words of
the year according to the American Dialect Society!</p>
<p>Since then we've all become accustomed to filling our mobile device screens with Apps.
And therein lies a problem: users are increasingly reporting App fatigue. They take up huge
amounts of memory on our devices meaning your shiny new App forces users into a choice –
which App do they value most? One which is already on their device or are they going to delete
something they are already invested in to install your brilliant new App? Maybe – that's the gamble.
Or perhaps there is another way?</p>
<h3>Making it Progressive</h3>
<p>Progressive WebApps were first touted by Google engineer Alex Russell and designer Francis Berriman
to describe a new type of App. This has all the advantages of being able to look and feel like a 'native' App,
including the ability to install on a user's homescreen - complete with logo and splashscreen at startup -
and the ability to still operate whilst the user's device is offline, then update in the background when
connection is restored. Brilliant for mobile users or those who typically have to deal with 3 & 4g and
intermittent or flaky connections.</p>
<p>Other useful benefits are massively reduced development costs and the convenience of being able to
bypass the App and Play stores – meaning no waiting for approval to push updates through and not having
to rely on the vagaries of these tech titans' stores to be able to promote your wares. Let's not forget the storage
implications too, a progressive WebApp currently can't store more than 50mb on your users devices, using the asynchronous
functions of the Cache API and Indexed DB.</p>
<h3>Which way now?</h3>
<p>To be clear, we aren't suggesting you should ditch your Native App or turn your back on ever having one
developed - it may well be that's the right route to market for your business. But for a new business,
one fighting to gain traction in a competitive crowded marketplace, and with precious limited resources,
this might just be the solution you are searching for.</p>
<p>At MoovaShaka we are harnessing the power of Progressive WebApps, ReactJS and Responsive Web design,
utilising a mobile-first approach to empower all your users to engage and enjoy their experience with your WebApp.
They work on all modern devices and because they are still hosted on the World Wide Web, they still work on the
laptop too!</p>
<h3>Get in Touch!</h3>
<p>Call us on  0203 0123 231 for more information, advice or a quote for your project.</p>
</div>
</section>
      <Footer />
    </div>
  )}
}
