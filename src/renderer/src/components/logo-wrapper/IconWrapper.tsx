import { JSXElement, mergeProps } from "solid-js";
import "./IconWrapper.css";

export enum IconSizeEnum {
  small,
  normal,
  large
}

interface IconWrapperProps {
  icon: JSXElement;
  size?: IconSizeEnum;
}

export function IconWrapper(props: IconWrapperProps): JSXElement {
  const mergedProps = mergeProps({ size: IconSizeEnum.normal }, props);
  const Icon = (): JSXElement => props.icon;
  return (
    <div
      class="icon-wrapper"
      classList={{
        small: mergedProps.size == IconSizeEnum.small,
        normal: mergedProps.size == IconSizeEnum.normal,
        large: mergedProps.size == IconSizeEnum.large
      }}
    >
      <Icon />
    </div>
  );
}
