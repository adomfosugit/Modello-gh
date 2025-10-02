<section id="hero" className="relative hero overflow-hidden py-32 ">
        {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="container relative z-10 mx-auto px-4">
  <div className="space-y-8 items-center">
    <Badge
      variant="outline"
      className="bg-sky-800/40 border-sky-700 px-4 py-2 rounded-4xl text-white text-sm font-medium"
    >
   
    </Badge>
    <h1
    
    className="text-3xl md:text-4xl lg:text-5xl font-seondary font-bold text-white leading-tight">
      Sparkling Spaces, <br />
      <span className="inter text-sky-400">Exceptional Results</span>
    </h1>
    <p
    
    className="text-white/80 text-lg md:text-xl max-w-md">
      <TextType 
                    text={[
                      "Your Space, our shine",
                      "Turning Everyday Spaces Into Bright Places.", 
                      "A Fresh Touch for Every Surface.", 
                      "Detail-Driven, Shine-Guaranteed.", 
                      "Professional Cleaning, Personal Care."
                    ]} 
                    typingSpeed={60} 
                    pauseDuration={1500} 
                    showCursor={true} 
                    cursorCharacter="|"  
                    textColors={['black']}
                  />
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        asChild
        size="lg"
        className="bg-sky-400 text-black hover:bg-blue-500"
      >
        <Link href="/onboarding">
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild
        variant="secondary"
        size="lg"
        className="bg-white/30 border-white/40 hover:bg-white/60"
      >
        <Link className="text-white hover:text-black" href="/doctors"></Link>
      </Button>
    </div>
  </div>
  
</div>
</section>