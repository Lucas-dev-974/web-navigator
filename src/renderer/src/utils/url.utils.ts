export class UrlUtils {
  static parseInputToUrl(url: string): string {
    const regexDomainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexDomainPatternHTTP = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    // * full url check
    if (regexDomainPatternHTTP.test(url)) return url;
    if (!regexDomainPattern.test(url)) return "https://google.com/search?q=" + url;
    else return "https://" + url;
  }

  static cleanUrl(url: string): string {
    return url.replace(/^https?:\/\/(www\.)/, "https://");
  }
}
