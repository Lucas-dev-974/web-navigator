/* eslint-disable @typescript-eslint/no-namespace */
import { createSignal } from "solid-js";

export const [webViews, setWebViews] = createSignal<ViewType[]>([]);

type ViewType = {
  id: number;
  name: string;
  src: string;
  history: string[];
};

export const WebviewManager = {
  newView: function (_src?: string): void {
    console.log(_src, WebviewManager.generateViewId());
  },

  generateViewId: function (): number {
    return webViews().length > 0 ? webViews()[webViews().length - 1].id : 1;
  }
};
