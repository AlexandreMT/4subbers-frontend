import {environment} from '../../../../environments/environment';

export const API = environment.API;

export class SubtitleSplitterApi {
  public static getSubtitleParts = (url?: string) => {
    return `${API}/subtitle-split/get-parts/${url}`;
  }

  public static splitSubtitle = () => {
    return `${API}/subtitle-split/split`;
  }
}
