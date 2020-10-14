import "./badge.scss"

import React from "react";
import { cssNames } from "../../utils/cssNames";
import { TooltipDecoratorProps, withTooltip } from "../tooltip";
import { observer } from "mobx-react";
import { autobind } from "../../utils";
import { observable } from "mobx";

interface Props extends React.HTMLAttributes<any>, TooltipDecoratorProps {
  small?: boolean;
  label?: React.ReactNode;
}

@withTooltip
@observer
export class Badge extends React.Component<Props> {
  @observable isExpanded = false

  @autobind()
  onDoubleClick() {
    this.isExpanded = !this.isExpanded
    window.getSelection()?.empty()
  }

  render() {
    const { className, label, small, children, ...elemProps } = this.props;
    const classNames = cssNames("Badge", { small }, className, { expanded: this.isExpanded })

    return (
      <span className={classNames} {...elemProps} onDoubleClick={this.onDoubleClick}>
        {label}
        {children}
      </span>
    )
  }
}
