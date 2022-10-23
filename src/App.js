import "bootstrap/scss/bootstrap.scss";
import { Accordion } from "react-bootstrap";
import List from "./List";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="p-4">
      <blockquote>
        <p>
          <em>
            <a href="https://metadevelopment.io/">Join our community</a>
          </em>
          for professional Software Developers and get more control over your
          life and career!
        </p>
      </blockquote>
      <hr />
      <h1 id="every-programmer-should-know-thinking-">
        Every Programmer Should Know :thinking:
      </h1>
      <p>
        A collection of (mostly) technical things every software developer
        should know.
      </p>
      <p>
        :point_up:
        <em>
          These are resources I can recommend to every programmer regardless of
          their skill level or tech stack
        </em>
      </p>
      <p>
        Highly opinionated :bomb:. Not backed by science. Comes in no particular
        order :recycle:
      </p>
      <p>
        U like it? :star: it and
        <a href="https://twitter.com/mr_mig_by/status/900735231552098306">
          share
        </a>
        with a friendly developer! U don&#39;t like it?
        <a href="https://twitter.com/RespectfulMemes/status/900147758845308930">
          Watch the doggo
        </a>
        :dog:
      </p>
      <p>
        <em>
          P.S. You <a href="https://xkcd.com/1050/">don&#39;t need to know</a>
          all of that by heart to be a programmer. But knowing the stuff will
          help you become better! :muscle:
        </em>
      </p>
      <p>
        <em>
          P.P.S. <a href="CONTRIBUTING.md">Contributions</a> are welcome!
        </em>
      </p>
      <hr />

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 id="introduction">Introduction</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=SzJ46YA_RaA">
                  Map of Computer Science
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="http://carlcheo.com/compsci">
                  40 Key Computer Science Concepts Explained In Layman’s Terms
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 id="falsehoods">Falsehoods</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://github.com/kdeldycke/awesome-falsehood">
                  Awesome Falsehoods
                </a>
                💊 Curated list of falsehoods programmers believe in. Check for
                things you do not know about Strings, Addresses, Names, Numbers,
                Emails, Timezones and Dates and more.
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 id="algorithms">Algorithms</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="http://bigocheatsheet.com/">Big O Cheatsheet</a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/22847284-grokking-algorithms-an-illustrated-guide-for-programmers-and-other-curio">
                  Grokking Algorithms
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html">
                  Algorithms Visualization
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 id="data-structures">Data Structures</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                movie_camera:
                <a href="https://sp19.datastructur.es/">
                  UC Berkeley, Data Structures Course
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.edx.org/course/foundations-data-structures-iitbombayx-cs213-1x-0#!">
                  Foundations of Data Structures - EDX
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.coursera.org/learn/data-structures">
                  Data Structures - Coursera
                </a>
              </ListItem>
              <ListItem>
                <a href="https://courses.csail.mit.edu/6.042/spring17/mcs.pdf">
                  Mathematics for Computer Science - Eric Lehman
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3 id="numbers">Numbers</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/12093869-how-to-count">
                  How to Count
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="http://floating-point-gui.de/">Floating Point Guide</a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html#680">
                  What Every Computer Scientist Should Know About Floating-Point
                  Arithmetic
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.codechef.com/wiki/tutorial-number-theory/">
                  Basic Number Theory Every Programmer Should Know...
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3 id="strings">Strings</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                page_facing_up:
                <a href="https://www.joelonsoftware.com/articles/Unicode.html">
                  Unicode and Character Sets
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/codebox/homoglyph/">Homoglyphs</a>
              </ListItem>
              <ListItem>
                <a href="http://cldr.unicode.org/">
                  Unicode Common Locale Data Repository
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=B1Sf1IhA0j4">ASCII</a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=vLBtrd9Ar28">UTF-8</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3 id="latency">Latency</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html">
                  Interactive Latency Infographics
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://gist.github.com/jboner/2841832">
                  Latency Numbers Every Programmer Should Know
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h3 id="time">Time</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                page_facing_up:
                <a href="https://unix4lyfe.org/time/">Some notes about time</a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=-5wpm-gesOY">
                  The Problem with Timezones
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <h3 id="memory">Memory</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                page_facing_up:
                <a href="https://lwn.net/Articles/250967/">
                  What every Programmer should know about memory
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <h3 id="distributed-systems">Distributed Systems</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications">
                  Designing Data-Intensive Applications
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf">
                  Designs, Lessons and Advice from Building Large Distributed
                  Systems
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/?from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Flamport%2Fpubs%2Ftime-clocks.pdf">
                  Time, Clocks and the Ordering of Events in a Distributed
                  System
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://queue.acm.org/detail.cfm?id=2745385">
                  There is No Now
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://aphyr.com/tags/jepsen">
                  Jepsen: how different databases behave under partition
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://pages.cs.wisc.edu/~zuyu/files/fallacies.pdf">
                  Fallacies of Distributed Computing Explained
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <h3 id="regexp">RegExp</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://github.com/regexhq">RegexHQ</a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/ziishaned/learn-regex">
                  Learn regex the easy way
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <h3 id="security">Security</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.dwheeler.com/secure-programs/">
                  Security Programming
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="http://loup-vaillant.fr/articles/rolling-your-own-crypto">
                  Rolling Your Own Crypto
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://gist.github.com/tqbf/be58d2d39690c3b366ad">
                  Cryptographic Right Answers
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://gist.github.com/paragonie-scott/e9319254c8ecbad4f227">
                  An Open Letter to Developers Everywhere (About Cryptography)
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/128003.Foundations_of_Security">
                  Foundations of Security: What Every Programmer Needs to Know
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">
                  OWASP Top 10
                </a>
              </ListItem>
              <ListItem>
                <a href="https://google-gruyere.appspot.com/part1">
                  Web Application Exploits and Defenses
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.integralist.co.uk/posts/hashing-and-encryption/">
                  Hashing, Encryption and Encoding
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            <h3 id="ux-usability">UX/Usability</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/18197267-don-t-make-me-think-revisited">
                  Don&#39;t Make Me Think: A Common Sense Approach to Web
                  Usability
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://vimeo.com/36579366">Inventing on Principle</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13">
          <Accordion.Header>
            <h3 id="seo">SEO</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                page_facing_up:
                <a href="https://katemats.com/blog/what-every-programmer-should-know-about-seo">
                  What Every Programmer Should Know About SEO
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>
            <h3 id="architecture">Architecture</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                scroll:
                <a href="https://web.cs.wpi.edu/~cs562/s98/pdf/Boxology.pdf">
                  A Field Guide to Boxology
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://github.com/papers-we-love/papers-we-love/blob/master/design/out-of-the-tar-pit.pdf?raw=true">
                  Out of the Tar Pit
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://faculty.salisbury.edu/~xswang/Research/Papers/SERelated/no-silver-bullet.pdf">
                  No Silver Bullet — Essence and Accidents of Software
                  Engineering
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=_ahvzDzKdB0">
                  Growing a Language
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=JHGkaShoyNs">
                  CQRS and Event Sourcing
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.poodr.com/">
                  Practical Object Oriented Design in Ruby
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=CglSFhwbI3s">
                  Evolutionary Software Architectures
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/donnemartin/system-design-primer">
                  System Design: A Primer
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf">
                  How JavaScript works: part-1
                </a>
                ,
                <a href="https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e">
                  2
                </a>
                ,
                <a href="https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec">
                  3
                </a>
                ,
                <a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5">
                  4
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=lNTaC-JWmdI&amp;t=166s&amp;list=PLZlJZzHmx31XvgT96DfbXQ4IMb1ryztbp&amp;index=33">
                  Entity-Component-System Architecture with Unity by example
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="15">
          <Accordion.Header>
            <h3 id="code-design">Code Design</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                page_facing_up:
                <a href="http://www.principles-wiki.net/">
                  Programming Principles Wiki
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="16">
          <Accordion.Header>
            <h3 id="engineering-philosophy">Engineering Philosophy</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=ho7oagHeqNc">
                  Category Theory in Life
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.infoq.com/presentations/Simple-Made-Easy">
                  Simple Made Easy
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.targetprocess.com/articles/speed-in-software-development/">
                  Speed In Software Development
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=QVBlnCTu9Ms">
                  #NoEstimates
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=0SARbwvhupQ&amp;feature=youtu.be">
                  The Myth of the Genius Programmer
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=FKTxC9pl-WM&amp;t=2s">
                  Making Badass Developers
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.zenprogrammer.org/en/10-rules-of-a-zen-programmer.html">
                  The Ten Rules of a Zen Programmer
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="http://antirez.com/news/112">
                  The mythical 10x programmer
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://queue.acm.org/detail.cfm?id=3068754">
                  The Debugging Mindset
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="http://worrydream.com/dbx/">
                  The Future of Programming
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.infoworld.com/article/3214481/application-development/the-good-software-development-manifesto.html">
                  The Good Software Development Manifesto
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.youtube.com/watch?v=8bZh5LMaSmE">
                  All the Little Things
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="17">
          <Accordion.Header>
            <h3 id="practices">Practices</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code">
                  Working Effectively with Legacy Code
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/4845.Code_Complete">
                  Code Complete
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/3735293-clean-code">
                  Clean Code: A Handbook of Agile Software Craftsmanship
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/387190.Test_Driven_Development">
                  Test Driven Development: By Example
                </a>
              </ListItem>
              <ListItem>
                white_check_mark:
                <a href="https://github.com/mr-mig/going-to-production">
                  Going To Production Checklist
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/1069827.Release_It_">
                  Release It!
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://drboolean.gitbooks.io/mostly-adequate-guide/content/">
                  Professor Frisby&#39;s Mostly Adequate Guide to Functional
                  Programming
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs">
                  SICP: Structure and Interpretation of Computer Programs
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://fsharpforfunandprofit.com/posts/13-ways-of-looking-at-a-turtle-3/">
                  Thirteen Ways of Looking at a Turtle
                </a>
              </ListItem>
              <ListItem>
                scroll:
                <a href="https://www.info.ucl.ac.be/~pvr/VanRoyChapter.pdf">
                  Programming Paradigms for Dummies: What Every Programmer
                  Should Know
                </a>
              </ListItem>
              <ListItem>
                <a href="https://learnxinyminutes.com/">Learn X in Y Minutes</a>
                Learn the basics of a language in a highly condensed way.
              </ListItem>
              <ListItem>
                <a href="http://hyperpolyglot.org/">Hyperpolyglot</a> Compare
                commonly used features of more or less similar languages
                side-by-side. Helps you to jump Python&lt;-&gt;Ruby,
                Ocaml&lt;-&gt;Haskell, etc.
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://blog.metadevelopment.io/pomodoro-for-programmers/">
                  Pomodoro for Programmers
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://landing.google.com/sre/sre-book/toc/index.html">
                  Site Reliability Engineering
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="18">
          <Accordion.Header>
            <h3 id="career">Career</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                moneybag: <a href="https://www.levels.fyi">Levels FYI</a>
                <br />
                Salary stats for various tech companies. Better than Glassdoor.
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="http://www.applematters.com/article/10-things-every-programmer-should-know-for-their-first-job/">
                  10 Things Every Programmer Should Know For Their First Job
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://www.codementor.io/blog/best-cities-software-engineer-earnings-271vpf599k">
                  How Much Do Software Engineers Really Make in Each City?
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://hackerlife.co/blog/san-francisco-large-corporation-employee-tenure">
                  Software Engineers Tenure in San Francisco
                </a>
              </ListItem>
              <ListItem>
                <a href="https://slides.com/mr-mig/se101">
                  Software Engineering 101
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/6399113-the-passionate-programmer">
                  The Passionate Programmer
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/23232941-soft-skills">
                  Soft Skills: The software developer&#39;s life manual
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/35674293-the-complete-software-developer-s-career-guide">
                  The Complete Software Developer&#39;s Career Guide
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/29895093-programming-beyond-practices">
                  Programming Beyond Practices: Be More Than Just a Code Monkey
                </a>
              </ListItem>
              <ListItem>
                <a href="https://docs.google.com/spreadsheets/d/1hfl67rI0Pk_hSm0GIX0QByW4NgfAH-cEmMa4N6UoO1w/edit#gid=1203141194">
                  A list of European Investors
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://medium.freecodecamp.com/ten-rules-for-negotiating-a-job-offer-ee17cccbdab6">
                  Ten Rules for Negotiating a Job Offer
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://medium.freecodecamp.com/how-to-interview-as-a-developer-candidate-b666734f12dd">
                  How To Interview As a Developer Candidate
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://relocate.me/blog/job-relocation/landing-a-tech-job-abroad-7-simple-tips/#more-514">
                  How To Get a Tech Job Abroad Faster
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="http://vlsicad.ucsd.edu/Research/Advice/star_engineer.pdf">
                  How To Be A STAR Engineer
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://tldroptions.io/">TL;DR; Stock Options</a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://blog.carta.com/equity-101-stock-option-basics/">
                  Equity 101 for Startup Employees
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/25707092-cracking-the-coding-interview">
                  Cracking the Coding Interview: 189 Programming Questions and
                  Solutions
                </a>
              </ListItem>
              <ListItem>
                fire:
                <a href="https://github.com/kdn251/interviews">
                  Everything you need to know to get the job
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://github.com/yangshun/tech-interview-handbook">
                  Tech Interview Handbook
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://norvig.com/21-days.html">
                  Teach Yourself Programming in Ten Years
                </a>
              </ListItem>
              <ListItem>
                page_facing_up:
                <a href="https://qotoqot.com/blog/founder-skills/">
                  What you should know as a founder of a software company
                </a>
              </ListItem>
              <ListItem>
                movie_camera:
                <a href="https://www.pramp.com/">
                  Code Interview Prep &amp; Programming Questions | Pramp
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header>
            <h3 id="fine-tune-your-resume">Fine-tune Your Resume</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                hammer: <a href="https://cvcompiler.com/">CV Compiler</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header>
            <h3 id="open-source">Open Source</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                globe_with_meridians:
                <a href="https://www.deployhq.com/git">
                  Learn how to use Git and GitHub
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="21">
          <Accordion.Header>
            <h3 id="remote-work">Remote Work</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                globe_with_meridians:
                <a href="https://docs.google.com/spreadsheets/d/1TLJSlNxCbwRNxy14Toe1PYwbCTY7h0CNHeer9J0VRzE/htmlview?sle=true#gid=1279011369">
                  Remotive.io: Startups hiring remotely
                </a>
              </ListItem>
              <ListItem>
                globe_with_meridians:
                <a href="https://github.com/georgemandis/remote-working-list">
                  Remote Work List for Developers
                </a>
              </ListItem>
              <ListItem>
                zap: <a href="https://nomadlist.com/">NomadList</a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://zapier.com/learn/remote-work/">
                  The Ultimate Guide to Remote Work
                </a>
              </ListItem>
              <ListItem>
                house:
                <a href="https://github.com/lukasz-madon/awesome-remote-job">
                  Awesome Remote Job
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="22">
          <Accordion.Header>
            <h3 id="problem-solving">Problem Solving</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/593458.The_Art_and_Craft_of_Problem_Solving">
                  The Art and Craft of Problem Solving
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/192221.How_to_Solve_It">
                  How to Solve It: A New Aspect of Mathematical Method
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="23">
          <Accordion.Header>
            <h3 id="soft-skills">Soft Skills</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/774088.Difficult_Conversations">
                  Difficult Conversations
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/15014.Crucial_Conversations">
                  Crucial Conversations
                </a>
              </ListItem>
              <ListItem>
                book:
                <a href="https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People">
                  How to Win Friends and Influence People
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="24">
          <Accordion.Header>
            <h3 id="mental-health">Mental Health</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://github.com/dreamingechoes/awesome-mental-health">
                  Awesome Mental Health
                </a>
                <br />A curated list of awesome articles, websites and resources
                about mental health in the software industry.
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="25">
          <Accordion.Header>
            <h3 id="papers-on-programming">Papers on Programming</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                heart:
                <a href="https://github.com/papers-we-love/papers-we-love">
                  Papers We Love
                </a>
              </ListItem>
              <ListItem>
                newspaper:
                <a href="https://blog.acolyer.org/">The Morning Paper</a>
              </ListItem>
              <ListItem>
                📜
                <a href="http://futuretech.blinkenlights.nl/misc/cpumemory.pdf">
                  What Every Programmer Should Know About Memory
                </a>
              </ListItem>
              <ListItem>
                📜
                <a href="https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf">
                  Go To Statement Considered Harmful
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="26">
          <Accordion.Header>
            <h3 id="free-books-on-programming">Free Books on Programming</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                books:
                <a href="https://github.com/EbookFoundation/free-programming-books">
                  Free Programming Books
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="27">
          <Accordion.Header>
            <h3 id="services-zap-">Services :zap:</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                🤖 <a href="https://www.abstractapi.com">Abstract API&#39;s</a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/ripienaar/free-for-dev/blob/master/README.md">
                  Free For Dev
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/abhishekbanthia/Public-APIs">
                  Public APIs
                </a>
              </ListItem>
              <ListItem>
                <a href="https://thenounproject.com/">The Noun Project</a>
              </ListItem>
              <ListItem>
                <a href="https://www.producthunt.com/@jurica87/collections/without-coding">
                  Without Coding
                </a>
              </ListItem>
              <ListItem>
                <a href="https://simpleicons.org/">Simpleicons</a>
              </ListItem>
              <ListItem>
                <a href="https://learn-anything.xyz/">Learn Anything</a>
              </ListItem>
              <ListItem>
                <a href="https://repl.it/">repl.it</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="28">
          <Accordion.Header>
            <h3 id="licenses">Licenses</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://choosealicense.com/">
                  Choose An Open Source License
                </a>
              </ListItem>
              <ListItem>
                <a href="https://tldrlegal.com/">
                  Well-explained Software licenses in TLDR version
                </a>
              </ListItem>
              <ListItem>
                <a href="https://medium.freecodecamp.org/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94">
                  How open source licenses work and how to add them to your
                  projects
                </a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="29">
          <Accordion.Header>
            <h3 id="where-to-look-for-further-info">
              Where To Look For Further Info
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                <a href="https://guide.freecodecamp.org/">freeCodeCamp Guide</a>
              </ListItem>
              <ListItem>
                <a href="https://www.geeksforgeeks.org/">GeeksForGeeks</a>
              </ListItem>
              <ListItem>
                <a href="https://dev.to/">Dev.To</a>
              </ListItem>
              <ListItem>
                <a href="https://stackoverflow.com/">Stack Overflow</a>
              </ListItem>
              <ListItem>
                <a href="https://dzone.com/">Dzone</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="30">
          <Accordion.Header>
            <h3 id="coding-practice-sites-zap-">Coding Practice Sites :zap:</h3>
          </Accordion.Header>
          <Accordion.Body>
            <List>
              <ListItem>
                link: <a href="http://codeforces.com/">CodeForces</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.codechef.com">CodeChef</a>
              </ListItem>
              <ListItem>
                link: <a href="https://coderbyte.com/">Coderbyte</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.codingame.com/">CodinGame</a>
              </ListItem>
              <ListItem>
                link: <a href="https://csacademy.com/">Cs Academy</a>
              </ListItem>
              <ListItem>
                link: <a href="https://hackerrank.com/">HackerRank</a>
              </ListItem>
              <ListItem>
                link: <a href="https://spoj.com/">Spoj</a>
              </ListItem>
              <ListItem>
                link: <a href="https://hackerearth.com/">HackerEarth</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.topcoder.com/">TopCoder</a>
              </ListItem>
              <ListItem>
                link: <a href="https://codewars.com/">Codewars</a>
              </ListItem>
              <ListItem>
                link: <a href="http://www.exercism.io/">Exercism</a>
              </ListItem>
              <ListItem>
                link: <a href="https://codesignal.com/">CodeSignal</a>
              </ListItem>
              <ListItem>
                link: <a href="https://projecteuler.net/">Project Euler</a>
              </ListItem>
              <ListItem>
                link: <a href="https://leetcode.com/">LeetCode</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.firecode.io/">Firecode.io</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.interviewbit.com/">InterviewBit</a>
              </ListItem>
              <ListItem>
                link: <a href="https://ucoder.com.br">uCoder</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.lintcode.com/">LintCode</a>
              </ListItem>
              <ListItem>
                link: <a href="https://codecombat.com/">CodeCombat</a>
              </ListItem>
              <ListItem>
                link:
                <a href="https://www.interviewcake.com/">InterviewCake</a>
              </ListItem>
              <ListItem>
                link: <a href="https://atcoder.jp/">At Coder</a>
              </ListItem>
              <ListItem>
                link: <a href="https://www.codility.com/">Codility</a>
              </ListItem>
            </List>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
