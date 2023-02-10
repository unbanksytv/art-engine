class Logger {
  private isEnabled = false;

  public enable() {
    this.isEnabled = true;
  }

  public printHero(version: string) {
    if (!this.isEnabled) {
      return;
    }
    console.log(`
██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗     ██╗██████╗ ███████╗    ██╗      █████╗ ██████╗
██║  ██║██╔══██╗██╔════╝██║  ██║██║     ██║██╔══██╗██╔════╝    ██║     ██╔══██╗██╔══██╗
███████║███████║███████╗███████║██║     ██║██████╔╝███████╗    ██║     ███████║██████╔╝
██╔══██║██╔══██║╚════██║██╔══██║██║     ██║██╔═══╝ ╚════██║    ██║     ██╔══██║██╔══██╗
██║  ██║██║  ██║███████║██║  ██║███████╗██║██║     ███████║    ███████╗██║  ██║██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝     ╚══════╝    ╚══════╝╚═╝  ╚═╝╚═════╝

Art Engine ${version} 👄
      `);
  }
}

const loggerInstance = new Logger();

export default loggerInstance;
