/* eslint-disable @typescript-eslint/no-namespace */
import { WebviewTag } from "electron";
import { createEffect, createSignal } from "solid-js";

export const [currentWebview, setCurrentWeview] = createSignal<WebviewType>();
export const [webviews, setWebviews] = createSignal<WebviewType[]>([]);

createEffect(() => {
  if (currentWebview()) {
    setWebviews((prev) => {
      if (!prev) return prev;
      const datas = [...prev];
      const index = datas.findIndex((item) => item.id == currentWebview()?.id);
      datas[index] = currentWebview() as WebviewType;
      return datas;
    });
  }
});

export type WebviewType = {
  id: number;
  name: string;
  src: string;
  history: string[];
  view?: Partial<WebviewTag> | HTMLElement;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultWebview: WebviewType = {
  id: 0,
  name: "Nouvel onglet",
  src: "https://google.com",
  history: [],
  view: { src: "https://google.com" } as WebviewTag
};

export const WebviewManager = {
  newView: function (webview: Partial<WebviewType>): void {
    const newId = WebviewManager.generateViewId();
    webview.id = newId;

    // * merge given webview with the defaultWebview
    const _webview: WebviewType = { ...defaultWebview, ...webview };
    setWebviews((prev) => {
      if (!prev) return prev;
      const datas = [...prev];
      datas.push(_webview);
      return datas;
    });
    setCurrentWeview(_webview);
  },

  updateWebview: function (webview: Partial<WebviewType>): boolean {
    const webviewIndex = [...webviews()].findIndex((item) => item.id == webview.id);
    const _webview = webviews()[webviewIndex];

    if (!_webview) return false;
    const updatedWebview: WebviewType = { ..._webview, ...webview };

    setWebviews((prev) => {
      if (!prev) return prev;
      const datas = [...prev];
      datas[webviewIndex] = updatedWebview;
      return datas;
    });

    // * If webview updated is the current webview , update it.
    if (currentWebview()?.id == webview.id) this.updateCurrentWebview(webview);
    return true;
  },

  deleteWebview: function (webviewId: number): void {
    setWebviews(webviews().filter((item) => item.id != webviewId));
    setCurrentWeview(webviews()[webviews().length - 1] ?? undefined);
  },

  generateViewId: function (): number {
    const lastId = webviews().length > 0 ? webviews()[webviews().length - 1].id : 0;
    return lastId + 1;
  },

  updateCurrentWebview: function (webview: Partial<WebviewType>): void {
    if (!webview.id) return alert("id menquant");
    setCurrentWeview((prev) => {
      if (!prev) return prev;
      return { ...prev, ...webview };
    });
  }
};
