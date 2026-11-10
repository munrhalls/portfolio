(() => {
const key="e773456908802155";
const artifactRevision=1;
const artifactLoadToken="BT_KNZuBkisqOvs6OFnlh1k6mcxwT28f";
const deriveQueueKey=function deriveLavishQueueKey(element, options = {}) {
  function stringValue(value) {
    return value === null || value === void 0 ? "" : String(value);
  }
  function attributeValue(el, name) {
    if (!el) return "";
    if (el.getAttribute) {
      const value = el.getAttribute(name);
      if (value !== null && value !== void 0) return value;
    }
    return el[name] || "";
  }
  function tagName(el) {
    return stringValue(el?.tagName || el?.nodeName).toLowerCase();
  }
  function closestElementMatching(el, selector) {
    return el && el.closest ? el.closest(selector) : null;
  }
  function elementPath(el) {
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && parts.length < 6) {
      let part = tagName(node) || "element";
      const id = stringValue(attributeValue(node, "id") || node.id).trim();
      if (id) {
        part += `#${id}`;
        parts.unshift(part);
        break;
      }
      const parent2 = node.parentElement;
      if (parent2 && parent2.children) {
        const siblings = [...parent2.children].filter((child) => tagName(child) === tagName(node));
        if (siblings.length > 1) part += `:nth-of-type(${siblings.indexOf(node) + 1})`;
      }
      parts.unshift(part);
      node = parent2;
    }
    return parts.join(" > ");
  }
  function scopeKey(el) {
    const scope2 = closestElementMatching(el, "form,fieldset") || el?.parentElement || el;
    const tag2 = tagName(scope2) || "scope";
    const explicit = stringValue(
      attributeValue(scope2, "data-lavish-question") || attributeValue(scope2, "id") || attributeValue(scope2, "name")
    ).trim();
    if (explicit) return `${tag2}:${explicit}`;
    return elementPath(scope2) || tag2;
  }
  function controlIdentity(el) {
    const identity = stringValue(attributeValue(el, "name") || attributeValue(el, "id") || el?.name).trim();
    if (identity) return identity;
    return elementPath(el);
  }
  function isKeyedInputType(type2) {
    return !(/* @__PURE__ */ new Set(["button", "submit", "reset", "file", "image", "hidden", "radio", "checkbox"])).has(type2);
  }
  if (Object.hasOwn(options, "queueKey")) {
    return stringValue(options.queueKey).trim();
  }
  const question = closestElementMatching(element, "[data-lavish-question]");
  const questionKey = stringValue(attributeValue(question, "data-lavish-question")).trim();
  if (questionKey) return `question:${questionKey}`;
  const tag = tagName(element);
  const type = stringValue(attributeValue(element, "type") || element?.type).toLowerCase();
  const scope = scopeKey(element);
  if (tag === "input" && type === "radio") {
    const name = stringValue(attributeValue(element, "name") || element?.name).trim();
    if (name) return `radio:${scope}:${name}`;
    return "";
  }
  if (tag === "input" && type === "checkbox") {
    const identity = controlIdentity(element);
    const explicitValue = stringValue(element?.getAttribute ? element.getAttribute("value") : "").trim();
    const option = explicitValue || stringValue(attributeValue(element, "id") || elementPath(element)).trim();
    if (identity) return `checkbox:${scope}:${identity}:${option}`;
    return "";
  }
  if (tag === "select" || tag === "textarea" || tag === "input" && isKeyedInputType(type)) {
    const identity = controlIdentity(element);
    if (identity) return `field:${scope}:${identity}`;
  }
  return "";
};
const isNativeInteractiveControl=function isNativeInteractiveControl(el) {
  return !!(el && el.closest && el.closest(
    "button,input,select,textarea,option,optgroup,label,summary,[contenteditable]:not([contenteditable='false'])"
  ));
};
const MODE_TOGGLE_HOTKEY_KEY="i";
const isModeToggleHotkeyEvent=function isModeToggleHotkeyEvent(event) {
  if (event.shiftKey || event.altKey) return false;
  return Boolean(event.metaKey || event.ctrlKey) && String(event.key || "").toLowerCase() === MODE_TOGGLE_HOTKEY_KEY;
};
const classifySevereTextOverflow=function classifySevereTextOverflow({
  fragments,
  box,
  overflowX,
  overflowY,
  isTruncated = false,
  isVisuallyHidden = false,
  minOutsideRatio = 0.2,
  epsilon = 1
}) {
  function overflowOf(fragment, boundary, axis) {
    const start = Number(axis === "horizontal" ? fragment.left : fragment.top);
    const end = Number(axis === "horizontal" ? fragment.right : fragment.bottom);
    const boxStart = Number(axis === "horizontal" ? boundary.left : boundary.top);
    const boxEnd = Number(axis === "horizontal" ? boundary.right : boundary.bottom);
    const explicitSize = Number(axis === "horizontal" ? fragment.width : fragment.height);
    const size = Number.isFinite(explicitSize) ? Math.max(0, explicitSize) : Math.max(0, end - start);
    if (![start, end, boxStart, boxEnd, size].every(Number.isFinite) || size <= 0) {
      return { overflowPx: 0, outsideRatio: 0, centerOutside: false };
    }
    const before = Math.max(0, boxStart - start);
    const after = Math.max(0, end - boxEnd);
    const center = start + size / 2;
    return {
      overflowPx: Math.max(before, after),
      outsideRatio: Math.min(1, (before + after) / size),
      centerOutside: center < boxStart || center > boxEnd
    };
  }
  if (isTruncated || isVisuallyHidden || !box || !Array.isArray(fragments) || fragments.length === 0) return null;
  const clipsX = overflowX === "hidden" || overflowX === "clip";
  const clipsY = overflowY === "hidden" || overflowY === "clip";
  const spillsY = overflowY === "visible";
  const scrollsX = overflowX === "auto" || overflowX === "scroll";
  const scrollsY = overflowY === "auto" || overflowY === "scroll";
  let strongest = null;
  for (const fragment of fragments) {
    const horizontal = overflowOf(fragment, box, "horizontal");
    const vertical = overflowOf(fragment, box, "vertical");
    const severeX = clipsX && !scrollsX && horizontal.overflowPx > epsilon && (horizontal.centerOutside || horizontal.outsideRatio >= minOutsideRatio);
    const severeY = (clipsY || spillsY) && !scrollsY && vertical.overflowPx > epsilon && vertical.centerOutside;
    const candidates = [
      severeX ? { axis: "horizontal", kind: "clipped-text", overflowPx: horizontal.overflowPx } : null,
      severeY ? { axis: "vertical", kind: "clipped-text", overflowPx: vertical.overflowPx } : null
    ];
    for (const candidate of candidates) {
      if (candidate && (!strongest || candidate.overflowPx > strongest.overflowPx)) strongest = candidate;
    }
  }
  return strongest;
};
const classifyMaterialRectEscape=function classifyMaterialRectEscape({
  rect,
  boundary,
  axes = ["horizontal", "vertical"],
  minOutsidePx = 4,
  minOutsideRatio = 0.2
}) {
  let strongest = null;
  for (const axis of axes) {
    const start = Number(axis === "horizontal" ? rect?.left : rect?.top);
    const end = Number(axis === "horizontal" ? rect?.right : rect?.bottom);
    const boundaryStart = Number(axis === "horizontal" ? boundary?.left : boundary?.top);
    const boundaryEnd = Number(axis === "horizontal" ? boundary?.right : boundary?.bottom);
    const explicitSize = Number(axis === "horizontal" ? rect?.width : rect?.height);
    const size = Number.isFinite(explicitSize) ? Math.max(0, explicitSize) : Math.max(0, end - start);
    if (![start, end, boundaryStart, boundaryEnd, size].every(Number.isFinite) || size <= 0) continue;
    const before = Math.max(0, boundaryStart - start);
    const after = Math.max(0, end - boundaryEnd);
    const outsidePx = Math.max(before, after);
    const outsideRatio = Math.min(1, (before + after) / size);
    const center = start + size / 2;
    const centerOutside = center < boundaryStart || center > boundaryEnd;
    if (outsidePx < minOutsidePx || !centerOutside && outsideRatio < minOutsideRatio) continue;
    const candidate = {
      axis,
      side: before >= after ? "start" : "end",
      overflowPx: outsidePx
    };
    if (!strongest || candidate.overflowPx > strongest.overflowPx) strongest = candidate;
  }
  return strongest;
};
const isMaterialPageOverflow=function isMaterialPageOverflow({ overflowPx, viewportWidth, hasEscapedContent }) {
  const overflow = Number(overflowPx);
  const width = Number(viewportWidth);
  const materialThreshold = Math.max(24, Number.isFinite(width) ? width * 0.05 : 24);
  return Boolean(hasEscapedContent) && Number.isFinite(overflow) && overflow >= materialThreshold;
};
const findStableLayoutFindings=function findStableLayoutFindings(first, second) {
  const key = (finding) => `${finding.kind}:${finding.selector}:${finding.axis || ""}`;
  const firstKeys = new Set(
    (Array.isArray(first) ? first : []).filter((finding) => finding?.severity === "error").map(key)
  );
  return (Array.isArray(second) ? second : []).filter(
    (finding) => finding?.severity === "error" && firstKeys.has(key(finding))
  );
};
const isNearTotalOcclusion=function isNearTotalOcclusion({ occludedSamples, totalSamples, minSamples = 5, minRatio = 0.9 }) {
  const occluded = Number(occludedSamples);
  const total = Number(totalSamples);
  return Number.isFinite(occluded) && Number.isFinite(total) && total >= minSamples && occluded / total >= minRatio;
};
const attachmentSizeError=function attachmentSizeError(size, maxBytes) {
  const cap = Number(maxBytes);
  if (!Number.isFinite(cap) || cap <= 0) return "";
  const n = Number(size);
  if (!Number.isFinite(n) || n <= cap) return "";
  const limit = cap >= 1024 * 1024 ? Math.round(cap / (1024 * 1024)) + " MB" : Math.round(cap / 1024) + " KB";
  return "Image is larger than the " + limit + " limit";
};
const classifyAttachmentBatch=function classifyAttachmentBatch(files, options = {}) {
  const { currentCount = 0, maxCount = Infinity, maxBytes = 0, accepted = {} } = options;
  const decisions = [];
  let count = currentCount;
  for (const file of Array.from(files || [])) {
    if (!file || !accepted[file.type]) {
      decisions.push({ kind: "skip" });
      continue;
    }
    const error = attachmentSizeError(file.size, maxBytes);
    if (error) {
      decisions.push({ kind: "error", error });
      continue;
    }
    if (count >= maxCount) {
      decisions.push({ kind: "cap" });
      continue;
    }
    count += 1;
    decisions.push({ kind: "accept", file });
  }
  return decisions;
};
const partitionDroppedFiles=function partitionDroppedFiles(dataTransfer, acceptedMime) {
  const accepted = acceptedMime || {};
  const images = [];
  const unsupported = [];
  if (!dataTransfer) return { images, unsupported };
  const files = Array.from(dataTransfer.files || []).filter(Boolean);
  for (const file of files) {
    if (accepted[file.type]) images.push(file);
    else unsupported.push(file.name || "file");
  }
  if (!files.length) {
    for (const item of Array.from(dataTransfer.items || [])) {
      if (!item || item.kind !== "file") continue;
      if (accepted[item.type]) {
        const file = item.getAsFile();
        if (file) images.push(file);
      } else {
        unsupported.push("file");
      }
    }
  }
  return { images, unsupported };
};
const planClipboardPaste=function planClipboardPaste(clipboardData, acceptedMime) {
  const { images } = partitionDroppedFiles(clipboardData, acceptedMime);
  const text = clipboardData && clipboardData.getData ? clipboardData.getData("text/plain") : "";
  const lines = String(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const names = images.map((file) => String(file && file.name || "")).filter(Boolean);
  const keepTextPaste = lines.length > 0 && !(names.length > 0 && lines.every(
    (line) => names.some((name) => line === name || line.endsWith("/" + name) || line.endsWith("\\" + name))
  ));
  return { images, keepTextPaste };
};
const acceptedImageTypes=function acceptedImageTypes(list) {
  const named = (Array.isArray(list) ? list : []).map(String).filter(Boolean);
  const mimes = named.length ? named : ["image/png", "image/jpeg", "image/webp"];
  const accepted = {};
  for (const mime of mimes) accepted[mime] = true;
  return { mimes, accepted, accept: mimes.join(",") };
};
const isTrustedAttachmentResult=function isTrustedAttachmentResult(event, context = {}) {
  if (!event || !context.parentWindow || event.source !== context.parentWindow) return false;
  const expected = context.nonce;
  if (typeof expected !== "string" || !expected) return false;
  const actual = (event.data || {}).nonce;
  return typeof actual === "string" && actual === expected;
};
const deriveAttachmentNoticeState=function deriveAttachmentNoticeState(state = {}) {
  const itemCount = Number(state.itemCount) || 0;
  const maxCount = Number(state.maxCount) || 0;
  if (state.queueBlocked && state.hasPending) return "Waiting for an image to finish uploading\u2026";
  if (state.queueBlocked && state.hasErrors) return "An image couldn't be attached. Retry or remove it before queuing.";
  if (state.capRejected && maxCount > 0 && itemCount >= maxCount)
    return "You can attach up to " + maxCount + " image" + (maxCount === 1 ? "" : "s") + ".";
  return "";
};
const isMermaidSvg=function isMermaidSvg(svg) {
  if (!svg) return false;
  const id = svg.id || "";
  if (id.startsWith("mermaid-") || id.startsWith("mermaid_")) return true;
  if (svg.getAttribute?.("aria-roledescription")) return true;
  return !!(svg.closest && svg.closest(".mermaid, [data-lavish-mermaid]"));
};
const mermaidNodeElement=function mermaidNodeElement(el) {
  if (!el || !el.closest) return null;
  const node = el.closest("g.node, g.nodes > g");
  if (!node) return null;
  const svg = node.closest("svg");
  return svg && isMermaidSvg(svg) ? node : null;
};
const mermaidNodeFrom=function mermaidNodeFrom(el, selector) {
  const node = mermaidNodeElement(el);
  if (!node) return null;
  const svg = node.closest("svg");
  const labelEl = node.querySelector(".nodeLabel, .label, foreignObject span, text");
  return {
    type: "mermaid-node",
    diagramId: svg.id || "",
    nodeId: node.id || "",
    label: readNodeLabel(labelEl),
    selector: typeof selector === "function" ? selector(node) : ""
  };
};
const normalizeMermaidNodeTarget=function normalizeMermaidNodeTarget(target) {
  return {
    type: "mermaid-node",
    diagramId: String(target.diagramId || ""),
    nodeId: String(target.nodeId || ""),
    label: String(target.label || ""),
    selector: String(target.selector || "")
  };
};
const readNodeLabel=function readNodeLabel(labelEl) {
  if (!labelEl) return "";
  let source = labelEl;
  if (labelEl.querySelector?.("br") && labelEl.cloneNode) {
    source = labelEl.cloneNode(true);
    for (const br of source.querySelectorAll("br")) br.replaceWith(document.createTextNode(" "));
  }
  return (source.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);
};
const mermaidHelpers={ isMermaidSvg, mermaidNodeElement, mermaidNodeFrom, normalizeMermaidNodeTarget, readNodeLabel };
const tableCellSpansRows=function tableCellSpansRows(cell, rowDistance = 1) {
  const span = tableSpanValue(cell, "rowspan", cell?.rowSpan);
  const renderedSpan = span === null || span < 0 ? 1 : span;
  return renderedSpan === 0 || renderedSpan > rowDistance;
};
const tableCellTarget=function tableCellTarget(element, selectorFor = (_element) => "") {
  const cell = element?.closest?.("td,th");
  const row = cell?.closest?.("tr");
  const table = row?.closest?.("table");
  if (!cell || !row || !table) return null;
  const cells = tableRowCells(row);
  const index = cells.indexOf(cell);
  if (index < 0) return null;
  const headerRow = tableHeaderRow(table);
  const shifted = tableRowIsShifted(table, row);
  const gridShifted = shifted || (headerRow ? tableRowIsShifted(table, headerRow) : false);
  const declaredHeading = cells.find(
    (candidate) => tableTagName(candidate) === "th" && String(candidate.getAttribute?.("scope") || "").toLowerCase() === "row"
  );
  const allHeaderCells = cells.every((candidate) => tableTagName(candidate) === "th");
  const inHeaderSection = headerRow === row || Boolean(cell.closest?.("thead"));
  const rowHeading = inHeaderSection ? null : declaredHeading || (allHeaderCells || shifted ? null : cells[0]);
  return {
    type: "table-cell",
    selector: String(selectorFor(cell) || "").slice(0, 240),
    rowLabel: tableText(rowHeading),
    columnLabel: gridShifted ? "" : tableColumnLabel(headerRow, cells, index),
    text: tableText(cell)
  };
};
const tableColumnLabel=function tableColumnLabel(headerRow, cells, index) {
  if (!headerRow) return "";
  const headerCells = tableRowCells(headerRow);
  const width = (cell) => tableColumnSpan(cell);
  const headerWidth = headerCells.reduce((sum, cell) => sum + width(cell), 0);
  const rowWidth = cells.reduce((sum, cell) => sum + width(cell), 0);
  if (headerWidth === 0 || headerWidth !== rowWidth) return "";
  let start = 0;
  for (let i = 0; i < index; i += 1) start += width(cells[i]);
  const end = start + width(cells[index]);
  let cursor = 0;
  for (const header of headerCells) {
    const next = cursor + width(header);
    if (cursor === start && next === end) return tableText(header);
    if (start < next) return "";
    cursor = next;
  }
  return "";
};
const tableColumnSpan=function tableColumnSpan(cell) {
  const span = tableSpanValue(cell, "colspan", cell?.colSpan);
  return span !== null && span >= 1 ? span : 1;
};
const tableHeaderRow=function tableHeaderRow(table) {
  const head = Array.from(table?.children || []).find((child) => tableTagName(child) === "thead");
  if (head) return tableRowsIn(head).at(-1) || null;
  const first = tableRowsIn(table)[0];
  const cells = tableRowCells(first);
  return cells.length > 0 && cells.every((cell) => tableTagName(cell) === "th") ? first : null;
};
const tableRowCells=function tableRowCells(row) {
  return Array.from(row?.children || []).filter((cell) => {
    const tag = tableTagName(cell);
    return tag === "td" || tag === "th";
  });
};
const tableRowGroup=function tableRowGroup(table, row) {
  let ancestor = row?.parentElement || null;
  while (ancestor && ancestor !== table) {
    const tag = tableTagName(ancestor);
    if (tag === "thead" || tag === "tbody" || tag === "tfoot") return ancestor;
    ancestor = ancestor.parentElement;
  }
  return table;
};
const tableRowIsShifted=function tableRowIsShifted(table, row) {
  if (!table || !row) return true;
  const rows = tableRowsIn(tableRowGroup(table, row));
  const index = rows.indexOf(row);
  if (index < 0) return true;
  for (let i = 0; i < index; i += 1) {
    for (const cell of tableRowCells(rows[i])) {
      if (tableCellSpansRows(cell, index - i)) return true;
    }
  }
  return false;
};
const tableRowsIn=function tableRowsIn(element) {
  const rows = [];
  for (const child of Array.from(element?.children || [])) {
    const tag = tableTagName(child);
    if (tag === "td" || tag === "th" || tag === "table") continue;
    if (tag === "tr") rows.push(child);
    else rows.push(...tableRowsIn(child));
  }
  return rows;
};
const tableSpanValue=function tableSpanValue(cell, name, parsed) {
  if (typeof parsed === "number" && Number.isInteger(parsed) && parsed >= 0) return parsed;
  const digits = /^[\t\n\f\r ]*(\d+)/.exec(String(cell?.getAttribute?.(name) ?? ""));
  return digits ? Number(digits[1]) : null;
};
const tableTagName=function tableTagName(element) {
  return String(element?.tagName || element?.nodeName || "").toLowerCase();
};
const tableText=function tableText(element) {
  return String(element?.innerText || element?.textContent || "").trim().replace(/\s+/g, " ").slice(0, 240);
};
(function createArtifactSdk(deriveQueueKey, isNativeInteractive = isNativeInteractiveControl, mermaid = mermaid_node_exports, artifactRevision = 0, artifactLoadToken = "", sessionKey2 = "", options = {}) {
  const { isMermaidSvg: isMermaidSvg2, mermaidNodeFrom: mermaidNodeFrom2, mermaidNodeElement: mermaidNodeElement2 } = mermaid;
  function postArtifactMessage(type, payload = {}) {
    parent.postMessage({ type, ...payload, artifact_load_token: String(artifactLoadToken || "") }, "*");
  }
  let annotationMode = true;
  let hovered = null;
  let selected = null;
  let ignoreNextClick = false;
  let shadow = null;
  let counter = 0;
  const ids = /* @__PURE__ */ new WeakMap();
  const ATTACHMENT_MAX_COUNT = Number.isFinite(options.maxAttachmentCount) && options.maxAttachmentCount > 0 ? options.maxAttachmentCount : 4;
  const ATTACHMENT_MAX_BYTES = Number.isFinite(options.maxAttachmentBytes) && options.maxAttachmentBytes > 0 ? options.maxAttachmentBytes : 0;
  const ATTACHMENT_IMAGE_TYPES = acceptedImageTypes(options.acceptedImageMime);
  const ATTACHMENT_ACCEPTED_MIME = ATTACHMENT_IMAGE_TYPES.accepted;
  const ATTACHMENT_NONCE = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "n" + Math.random().toString(36).slice(2) + Date.now().toString(36);
  let attachmentLocalCounter = 0;
  let activeAttachments = null;
  const REMOVE_ICON = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  function attachmentChipHtml(item, index) {
    const name = escapeAnnotationText(item.name || "image");
    const thumb = item.url ? '<img class="lavish-attachment-thumb" src="' + escapeAnnotationText(item.url) + '" alt="">' : '<span class="lavish-attachment-thumb lavish-attachment-thumb-empty" aria-hidden="true"></span>';
    let status = "";
    if (item.status === "uploading") status = '<span class="lavish-attachment-status">Uploading\u2026</span>';
    else if (item.status === "error")
      status = '<span class="lavish-attachment-status lavish-attachment-status-error">' + escapeAnnotationText(item.error || "Upload failed") + "</span>";
    const retry = item.status === "error" && item.file ? '<button type="button" class="lavish-attachment-retry" data-attachment-retry="' + index + '">Retry</button>' : "";
    return '<div class="lavish-attachment-chip' + (item.status === "error" ? " is-error" : "") + '">' + thumb + '<span class="lavish-attachment-body"><span class="lavish-attachment-name" title="' + name + '">' + name + "</span>" + status + "</span>" + retry + '<button type="button" class="lavish-attachment-remove" data-attachment-remove="' + index + '" aria-label="Remove image" title="Remove">' + REMOVE_ICON + "</button></div>";
  }
  function makeAttachmentsController(listEl, { notify = () => {
  }, onLayout = () => {
  } } = {}) {
    const items = [];
    let capRejected = false;
    let queueBlocked = false;
    function render() {
      if (items.length < ATTACHMENT_MAX_COUNT) capRejected = false;
      if (!hasPending() && !hasErrors()) queueBlocked = false;
      notify(
        deriveAttachmentNoticeState({
          itemCount: items.length,
          maxCount: ATTACHMENT_MAX_COUNT,
          capRejected,
          queueBlocked,
          hasPending: hasPending(),
          hasErrors: hasErrors()
        })
      );
      listEl.innerHTML = items.map((item, index) => attachmentChipHtml(item, index)).join("");
      listEl.hidden = items.length === 0;
      for (const button of listEl.querySelectorAll("[data-attachment-remove]")) {
        button.addEventListener("click", () => removeAt(Number(button.getAttribute("data-attachment-remove"))));
      }
      for (const button of listEl.querySelectorAll("[data-attachment-retry]")) {
        button.addEventListener("click", () => retryAt(Number(button.getAttribute("data-attachment-retry"))));
      }
      onLayout();
    }
    function upload(item) {
      item.status = "uploading";
      item.error = "";
      render();
      item.file.arrayBuffer().then((bytes) => {
        if (!items.includes(item)) return;
        postArtifactMessage("lavish:uploadAttachment", {
          nonce: ATTACHMENT_NONCE,
          localId: item.localId,
          name: item.name,
          mime: item.mime,
          bytes
        });
      }).catch(() => {
        if (!items.includes(item)) return;
        item.status = "error";
        item.error = "Could not read image";
        render();
      });
    }
    function addFiles(fileList) {
      const files = [...fileList || []];
      const decisions = classifyAttachmentBatch(files, {
        currentCount: items.length,
        maxCount: ATTACHMENT_MAX_COUNT,
        maxBytes: ATTACHMENT_MAX_BYTES,
        accepted: ATTACHMENT_ACCEPTED_MIME
      });
      const toUpload = [];
      let added = false;
      for (const decision of decisions) {
        if (decision.kind === "cap") {
          capRejected = true;
        } else if (decision.kind === "error") {
          items.push({
            localId: "att-" + ++attachmentLocalCounter,
            file: null,
            name: decision.file?.name || "image",
            mime: "",
            status: "error",
            id: "",
            error: decision.error,
            url: ""
          });
        } else if (decision.kind === "accept") {
          const item = {
            localId: "att-" + ++attachmentLocalCounter,
            file: decision.file,
            name: decision.file.name || "image",
            mime: decision.file.type,
            status: "uploading",
            id: "",
            error: "",
            url: URL.createObjectURL(decision.file)
          };
          items.push(item);
          toUpload.push(item);
          added = true;
        }
      }
      render();
      for (const item of toUpload) upload(item);
      return added;
    }
    function removeAt(index) {
      const item = items[index];
      if (!item) return;
      if (item.url) URL.revokeObjectURL(item.url);
      items.splice(index, 1);
      render();
    }
    function retryAt(index) {
      if (items[index] && items[index].file) upload(items[index]);
    }
    function rejectUnsupportedBatch(names) {
      for (const name of names || []) {
        items.push({
          localId: "att-" + ++attachmentLocalCounter,
          file: null,
          name: name || "file",
          mime: "",
          status: "error",
          id: "",
          error: "UNSUPPORTED_TYPE",
          url: ""
        });
      }
      render();
    }
    function rejectUnsupported(name) {
      rejectUnsupportedBatch([name]);
    }
    function handleResult(localId, ok, id, error) {
      const item = items.find((entry) => entry.localId === localId);
      if (item) {
        if (ok && id) {
          item.status = "ready";
          item.id = String(id);
          item.error = "";
        } else {
          item.status = "error";
          item.error = String(error || "Upload failed");
        }
        render();
      }
    }
    function collectReady() {
      return items.filter((item) => item.status === "ready" && item.id).map((item) => ({ id: item.id, name: item.name }));
    }
    function hasReady() {
      return items.some((item) => item.status === "ready" && item.id);
    }
    function hasPending() {
      return items.some((item) => item.status === "uploading");
    }
    function hasErrors() {
      return items.some((item) => item.status === "error");
    }
    function setQueueBlocked(value) {
      queueBlocked = Boolean(value);
      render();
    }
    function destroy() {
      for (const item of items) if (item.url) URL.revokeObjectURL(item.url);
      items.length = 0;
    }
    render();
    return {
      addFiles,
      rejectUnsupported,
      rejectUnsupportedBatch,
      handleResult,
      collectReady,
      hasReady,
      hasPending,
      hasErrors,
      setQueueBlocked,
      destroy
    };
  }
  function uid(el) {
    if (!ids.has(el)) ids.set(el, String(++counter));
    return ids.get(el);
  }
  function escapeAnnotationText(value) {
    return String(value).replace(
      /[&<>"']/g,
      (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]
    );
  }
  function selector(el) {
    if (!el || !el.tagName) return "";
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && parts.length < 5) {
      let part = node.tagName.toLowerCase();
      if (node.id) {
        part += "#" + CSS.escape(node.id);
        parts.unshift(part);
        break;
      }
      const parent2 = node.parentElement;
      if (parent2) {
        const same = [...parent2.children].filter((x) => x.tagName === node.tagName);
        if (same.length > 1) part += ":nth-of-type(" + (same.indexOf(node) + 1) + ")";
      }
      parts.unshift(part);
      node = parent2;
    }
    return parts.join(" > ");
  }
  function context(el, { table = false } = {}) {
    const base = {
      uid: uid(el),
      selector: selector(el),
      tag: (el.tagName || "").toLowerCase(),
      text: (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 240)
    };
    const tableTarget = table ? tableCellTarget(el, selector) : null;
    if (tableTarget) base.target = tableTarget;
    const mermaidNode = mermaidNodeFrom2(el, selector);
    if (mermaidNode) {
      base.tag = "mermaid-node";
      base.text = mermaidNode.label || base.text;
      base.target = mermaidNode;
    }
    return base;
  }
  function annotationTargetEl(el) {
    return mermaidNodeElement2(el) || el;
  }
  const mermaidViewports = /* @__PURE__ */ new WeakMap();
  function findMermaidSvgs() {
    const svgs = /* @__PURE__ */ new Set();
    for (const svg of document.querySelectorAll("svg")) {
      if (isMermaidSvg2(svg)) svgs.add(svg);
    }
    return [...svgs];
  }
  function createViewport(svg) {
    const bbox = svg.getBBox ? safeBBox(svg) : null;
    const initial = readViewBox(svg) || (bbox ? { x: bbox.x, y: bbox.y, w: bbox.width, h: bbox.height } : null);
    if (!initial) return null;
    svg.setAttribute("viewBox", `${initial.x} ${initial.y} ${initial.w} ${initial.h}`);
    const view = { ...initial };
    let frozen = false;
    let panning = null;
    function apply() {
      svg.setAttribute("viewBox", `${view.x} ${view.y} ${view.w} ${view.h}`);
    }
    function reset() {
      Object.assign(view, initial);
      apply();
    }
    function zoomAt(clientX, clientY, factor) {
      const rect = svg.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      const fx = view.x + view.w * px;
      const fy = view.y + view.h * py;
      const next = Math.min(Math.max(view.w * factor, initial.w / 40), initial.w * 8);
      const scale = next / view.w;
      view.w = next;
      view.h *= scale;
      view.x = fx - (fx - view.x) * scale;
      view.y = fy - (fy - view.y) * scale;
      apply();
    }
    function onWheel(event) {
      if (frozen) return;
      event.preventDefault();
      zoomAt(event.clientX, event.clientY, event.deltaY > 0 ? 1.15 : 1 / 1.15);
    }
    function onPointerDown(event) {
      if (frozen || event.button !== 0) return;
      panning = { x: event.clientX, y: event.clientY, vx: view.x, vy: view.y };
      svg.setPointerCapture?.(event.pointerId);
      svg.style.cursor = "grabbing";
    }
    function onPointerMove(event) {
      if (!panning) return;
      const rect = svg.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      view.x = panning.vx - (event.clientX - panning.x) / rect.width * view.w;
      view.y = panning.vy - (event.clientY - panning.y) / rect.height * view.h;
      apply();
    }
    function onPointerUp(event) {
      panning = null;
      svg.releasePointerCapture?.(event.pointerId);
      svg.style.cursor = frozen ? "" : "grab";
    }
    svg.addEventListener("wheel", onWheel, { passive: false });
    svg.addEventListener("pointerdown", onPointerDown);
    svg.addEventListener("pointermove", onPointerMove);
    svg.addEventListener("pointerup", onPointerUp);
    svg.addEventListener("pointercancel", onPointerUp);
    function setFrozen(next) {
      frozen = !!next;
      panning = null;
      svg.style.cursor = frozen ? "" : "grab";
      svg.style.touchAction = frozen ? "" : "none";
    }
    setFrozen(false);
    return { reset, setFrozen };
  }
  function safeBBox(svg) {
    try {
      return svg.getBBox();
    } catch {
      return null;
    }
  }
  function readViewBox(svg) {
    const raw = svg.getAttribute?.("viewBox");
    if (!raw) return null;
    const parts = raw.trim().split(/[\s,]+/).map(Number);
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return null;
    return { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
  }
  const whiteboardEmbeds = /* @__PURE__ */ new Map();
  function mermaidContainerIndex(container) {
    return [...document.querySelectorAll(".mermaid")].indexOf(container);
  }
  function whiteboardEmbedHeightPx(svgRect) {
    const headerPx = 96;
    const min = 360;
    const max = Math.max(min, Math.round((window.innerHeight || 800) * 0.8));
    return Math.max(min, Math.min(Math.round(svgRect.height) + headerPx, max));
  }
  function embedWhiteboard(svg) {
    const container = svg.closest(".mermaid");
    if (!container) return;
    const existing = whiteboardEmbeds.get(container);
    if (existing && existing.iframe.isConnected) {
      existing.index = mermaidContainerIndex(container);
      return;
    }
    const index = mermaidContainerIndex(container);
    if (index < 0) return;
    const rect = svg.getBoundingClientRect();
    if (rect.height < 40) {
      window.setTimeout(scheduleMermaidEnhance, 150);
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.setAttribute("data-lavish-ui", "whiteboard-inline");
    iframe.setAttribute("title", "Excalidraw whiteboard");
    iframe.setAttribute("sandbox", "allow-scripts allow-popups");
    iframe.src = whiteboardFrameSrc({ index, diagramId: svg.id || "" });
    iframe.style.cssText = `display:block;width:100%;height:${whiteboardEmbedHeightPx(rect)}px;border:1px solid rgba(128,128,128,.35);border-radius:12px;background:transparent`;
    container.style.display = "none";
    container.insertAdjacentElement("afterend", iframe);
    whiteboardEmbeds.set(container, { iframe, index, diagramId: svg.id || "" });
  }
  function whiteboardEmbedEntries() {
    return [...whiteboardEmbeds.values()].filter((entry) => entry.iframe.isConnected);
  }
  function whiteboardEntryByIndex(index) {
    return whiteboardEmbedEntries().find((entry) => entry.index === Number(index)) || null;
  }
  function whiteboardFrameSrc(entry) {
    const params = new URLSearchParams({
      diagramIndex: String(entry.index),
      diagramId: String(entry.diagramId || ""),
      // The frame's channel token is bound to this session, so the frame page
      // must be told which session it belongs to.
      key: String(sessionKey2 || "")
    });
    return `/whiteboard-frame?${params}`;
  }
  window.addEventListener("message", (event) => {
    if (event.source !== parent) return;
    const msg = event.data || {};
    if (msg.type === "lavish:suspendWhiteboard") {
      const target = whiteboardEntryByIndex(msg.diagramIndex);
      if (target) target.iframe.src = "about:blank";
    }
    if (msg.type === "lavish:resumeWhiteboard") {
      const target = whiteboardEntryByIndex(msg.diagramIndex);
      if (target) target.iframe.src = whiteboardFrameSrc(target);
    }
    if (msg.type === "lavish:requestLayoutDiagnostics") scheduleLayoutAudit(true);
  });
  function enhanceMermaid() {
    for (const svg of findMermaidSvgs()) {
      embedWhiteboard(svg);
      if (mermaidViewports.has(svg)) continue;
      const viewport = createViewport(svg);
      if (viewport) {
        viewport.setFrozen(annotationMode);
        mermaidViewports.set(svg, viewport);
      }
    }
  }
  let mermaidEnhanceScheduled = false;
  function scheduleMermaidEnhance() {
    if (mermaidEnhanceScheduled) return;
    mermaidEnhanceScheduled = true;
    const run2 = () => {
      mermaidEnhanceScheduled = false;
      enhanceMermaid();
    };
    if (typeof window.requestAnimationFrame === "function") window.requestAnimationFrame(run2);
    else window.setTimeout(run2, 50);
  }
  function setMermaidFrozen(frozen) {
    for (const svg of findMermaidSvgs()) {
      mermaidViewports.get(svg)?.setFrozen(frozen);
    }
  }
  function closestElement(node) {
    if (!node) return document.body;
    if (node.nodeType === 1) return node;
    return node.parentElement || document.body;
  }
  function nodePath(node, root) {
    const path9 = [];
    let current = node;
    while (current && current !== root) {
      const parentNode = current.parentNode;
      if (!parentNode) break;
      path9.unshift([...parentNode.childNodes].indexOf(current));
      current = parentNode;
    }
    return path9;
  }
  function rangeBoundary(node, offset) {
    const el = closestElement(node);
    return {
      selector: selector(el),
      path: nodePath(node, el),
      offset: Number(offset) || 0
    };
  }
  function textSelectionContext(selection) {
    if (!selection || selection.rangeCount === 0) return null;
    const range = selection.getRangeAt(0);
    const text = selection.toString().trim().replace(/\s+/g, " ");
    if (range.collapsed || !text) return null;
    const ancestor = closestElement(range.commonAncestorContainer);
    if (isLavishUi(ancestor) || isLavishAction(ancestor) || isInteractiveControl(ancestor)) return null;
    const commonAncestorSelector = selector(ancestor);
    const target = {
      type: "text-range",
      text,
      selector: commonAncestorSelector,
      commonAncestorSelector,
      start: rangeBoundary(range.startContainer, range.startOffset),
      end: rangeBoundary(range.endContainer, range.endOffset)
    };
    return {
      uid: "",
      selector: commonAncestorSelector,
      tag: "text",
      text: text.slice(0, 240),
      target,
      element: ancestor,
      range: range.cloneRange()
    };
  }
  function isLavishUi(el) {
    return !!(el && el.closest && el.closest("[data-lavish-ui]"));
  }
  function isLavishAction(el) {
    return !!(el && el.closest && el.closest("[data-lavish-action]"));
  }
  function isInteractiveControl(el) {
    return isNativeInteractive(el);
  }
  function highlightElement(el) {
    if (!el) return;
    el.style.outline = "var(--lavish-annotate-outline,2px solid #f4c95d)";
    el.style.outlineOffset = "var(--lavish-annotate-offset,2px)";
  }
  function clearHighlight(el) {
    if (el) el.style.outline = "";
  }
  function clearTextHighlight() {
    if (!shadow) return;
    for (const el of [...shadow.querySelectorAll(".lavish-text-highlight")]) el.remove();
  }
  function highlightTextRange(range) {
    clearTextHighlight();
    const root = ensureShadow();
    for (const rect of [...range.getClientRects()]) {
      if (rect.width <= 0 || rect.height <= 0) continue;
      const mark = document.createElement("div");
      mark.className = "lavish-text-highlight";
      mark.style.left = rect.left + "px";
      mark.style.top = rect.top + "px";
      mark.style.width = rect.width + "px";
      mark.style.height = rect.height + "px";
      root.appendChild(mark);
    }
  }
  function setAnnotationMode(enabled) {
    annotationMode = !!enabled;
    let style = document.getElementById("lavish-cursor-style");
    if (annotationMode && !style) {
      style = document.createElement("style");
      style.id = "lavish-cursor-style";
      style.textContent = ":root{--lavish-accent:#f4c95d;--lavish-annotate-outline:2px solid var(--lavish-accent);--lavish-annotate-offset:2px}*{cursor:default!important}[data-lavish-action],[data-lavish-action] *{cursor:pointer!important}input,textarea,[contenteditable]:not([contenteditable='false']){cursor:text!important}button,select,label,option,input[type='button'],input[type='submit'],input[type='reset'],input[type='checkbox'],input[type='radio'],input[type='file'],input[type='color'],input[type='range'],input[type='image']{cursor:pointer!important}";
      document.head.appendChild(style);
    }
    if (!annotationMode && style) style.remove();
    if (!annotationMode) closeCard();
    setMermaidFrozen(annotationMode);
  }
  function queuePrompt(prompt, options2 = {}) {
    const originElement = options2.element || document.activeElement || document.body;
    const item = {
      ...context(originElement),
      prompt: String(prompt || "")
    };
    const queueKey = typeof deriveQueueKey === "function" ? deriveQueueKey(originElement, options2) : "";
    if (queueKey) item._lavishQueueKey = String(queueKey);
    if (options2.uid) item.uid = String(options2.uid);
    if (options2.selector) item.selector = String(options2.selector);
    if (options2.tag) item.tag = String(options2.tag);
    if (options2.text) item.text = String(options2.text);
    if (options2.target) item.target = options2.target;
    if (options2.data) item.prompt += "\n\nContext data:\n" + JSON.stringify(options2.data, null, 2);
    if (Array.isArray(options2.attachments) && options2.attachments.length) {
      const attachments = options2.attachments.filter((attachment) => attachment && attachment.id).map(
        (attachment) => attachment.name ? { id: String(attachment.id), name: String(attachment.name) } : { id: String(attachment.id) }
      );
      if (attachments.length) item.attachments = attachments;
    }
    postArtifactMessage("lavish:queuePrompt", { prompt: item });
  }
  function sendQueuedPrompts() {
    postArtifactMessage("lavish:sendQueuedPrompts");
  }
  function endSession() {
    postArtifactMessage("lavish:endSession");
  }
  function snapshot() {
    const lines = [];
    function walk(el, depth) {
      if (!(el instanceof Element) || depth > 6 || isLavishUi(el)) return;
      const c = context(el);
      const name = c.text ? ' "' + c.text.slice(0, 80).replace(/"/g, "'") + '"' : "";
      lines.push("  ".repeat(depth) + "uid=" + c.uid + " " + c.tag + name);
      for (const child of el.children) walk(child, depth + 1);
    }
    walk(document.body, 0);
    return lines.join("\n");
  }
  const layoutAuditSettleMs = 180;
  const layoutAuditMaxWaitMs = 2e3;
  const layoutAuditAnimationMaxWaitMs = 4e3;
  const layoutAuditStableSampleMs = 120;
  let layoutAuditTimer = 0;
  let layoutAuditRun = 0;
  let lastLayoutAuditSignature = null;
  let layoutAuditPublishRequested = false;
  let layoutAuditPassSequence = 0;
  function toPixelNumber(value) {
    const parsed = Number.parseFloat(String(value || "0"));
    return Number.isFinite(parsed) ? parsed : 0;
  }
  function roundedOverflowPx(value) {
    return Math.round(Math.max(0, value) * 10) / 10;
  }
  function elementText(el) {
    return String(el?.innerText || el?.textContent || "").trim().replace(/\s+/g, " ");
  }
  function directText(el) {
    return [...el?.childNodes || []].filter((node) => node.nodeType === 3).map((node) => String(node.textContent || "")).join(" ").trim().replace(/\s+/g, " ");
  }
  function isRequiredControl(el) {
    if (!el?.matches?.("button,input,select,textarea,a[href],summary,[data-lavish-action],[role]")) return false;
    if (el.matches("input[type='hidden'],[disabled],[aria-disabled='true']")) return false;
    if (!el.hasAttribute("role")) return true;
    return (/* @__PURE__ */ new Set(["button", "link", "checkbox", "radio", "switch", "textbox", "combobox"])).has(
      String(el.getAttribute("role") || "").toLowerCase()
    );
  }
  function isSemanticTextBoundary(el) {
    return Boolean(
      el?.matches?.(
        "p,h1,h2,h3,h4,h5,h6,button,label,a[href],li,dt,dd,th,td,legend,figcaption,summary,[role='button'],[role='link'],[role='alert'],[role='status']"
      )
    );
  }
  function hasSemanticTextBoundaryAncestor(el) {
    let node = el?.parentElement;
    while (node && node !== document.body && node !== document.documentElement) {
      if (isSemanticTextBoundary(node)) return true;
      node = node.parentElement;
    }
    return false;
  }
  function auditedText(el) {
    return isSemanticTextBoundary(el) ? elementText(el) : directText(el);
  }
  function rectArea(rect) {
    return Math.max(0, rect.width) * Math.max(0, rect.height);
  }
  function isVisibleForLayoutAudit(el, rect = el.getBoundingClientRect()) {
    if (!el || isLavishUi(el) || rect.width <= 0 || rect.height <= 0) return false;
    let node = el;
    while (node && node.nodeType === 1) {
      const style = getComputedStyle(node);
      const opacity = Number.parseFloat(style.opacity || "1");
      if (style.display === "none" || style.visibility === "hidden" || style.contentVisibility === "hidden" || Number.isFinite(opacity) && opacity <= 0.01) {
        return false;
      }
      node = node.parentElement;
    }
    return true;
  }
  function isIntentionalHorizontalScroller(el) {
    if (!el || el === document.body || el === document.documentElement) return false;
    const overflowX = getComputedStyle(el).overflowX;
    return overflowX === "auto" || overflowX === "scroll";
  }
  function isIntentionalVerticalScroller(el) {
    if (!el || el === document.body || el === document.documentElement) return false;
    const overflowY = getComputedStyle(el).overflowY;
    return overflowY === "auto" || overflowY === "scroll";
  }
  function hasIntentionalHorizontalScrollerAncestor(el) {
    let node = el;
    while (node && node.nodeType === 1 && node !== document.body && node !== document.documentElement) {
      if (isIntentionalHorizontalScroller(node)) return true;
      node = node.parentElement;
    }
    return false;
  }
  function hasReachableVerticalScrollerAncestor(el) {
    let node = el?.parentElement;
    while (node && node !== document.body && node !== document.documentElement) {
      if (isIntentionalVerticalScroller(node)) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < (window.innerHeight || 0)) return true;
      }
      node = node.parentElement;
    }
    return false;
  }
  function rootVerticalScrollLocked() {
    const values = [document.documentElement, document.body].filter(Boolean).map((node) => getComputedStyle(node).overflowY);
    return values.some((value) => value === "hidden" || value === "clip");
  }
  function paddingBoxRect(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return {
      left: rect.left + toPixelNumber(style.borderLeftWidth),
      right: rect.right - toPixelNumber(style.borderRightWidth),
      top: rect.top + toPixelNumber(style.borderTopWidth),
      bottom: rect.bottom - toPixelNumber(style.borderBottomWidth)
    };
  }
  function textNodesForAudit(el) {
    const descendants = isSemanticTextBoundary(el);
    const nodes = [];
    const pending = [...el?.childNodes || []];
    while (pending.length > 0) {
      const node = pending.shift();
      if (!node) continue;
      if (node.nodeType === 3) {
        if (String(node.textContent || "").trim()) nodes.push(node);
      } else if (descendants && node.nodeType === 1) {
        pending.unshift(...node.childNodes || []);
      }
    }
    return nodes;
  }
  function textFragmentsForAudit(el) {
    const fragments = [];
    for (const textNode of textNodesForAudit(el)) {
      const range = document.createRange();
      range.selectNodeContents(textNode);
      fragments.push(...[...range.getClientRects()].filter((rect) => rect.width > 0 && rect.height > 0));
      range.detach?.();
    }
    return fragments;
  }
  function isIntentionalTextTruncation(style) {
    return style.textOverflow === "ellipsis" || Number.parseInt(style.webkitLineClamp || "0", 10) > 0;
  }
  function hasVisualMask(style) {
    const maskImage = String(style.maskImage || style.webkitMaskImage || "none").toLowerCase();
    const clipPath = String(style.clipPath || "none").toLowerCase();
    return maskImage !== "none" && maskImage !== "" || clipPath !== "none" && clipPath !== "";
  }
  function isRoundedOverflowMask(style) {
    const clips = style.overflowX === "hidden" || style.overflowX === "clip" || style.overflowY === "hidden" || style.overflowY === "clip";
    if (!clips) return false;
    return [
      style.borderTopLeftRadius,
      style.borderTopRightRadius,
      style.borderBottomRightRadius,
      style.borderBottomLeftRadius
    ].some((value) => toPixelNumber(value) > 0);
  }
  function isDiagramLayoutElement(el) {
    return Boolean(el?.closest?.(".mermaid,svg,[data-lavish-ui]"));
  }
  function hasVisualMaskAncestor(el) {
    let node = el;
    while (node && node.nodeType === 1) {
      const style = getComputedStyle(node);
      if (hasVisualMask(style) || isRoundedOverflowMask(style)) return true;
      node = node.parentElement;
    }
    return false;
  }
  function clippingBoundariesFor(el) {
    const boundaries = [];
    let node = el?.parentElement;
    while (node && node !== document.body && node !== document.documentElement) {
      const style = getComputedStyle(node);
      const axes = [];
      if (style.overflowX === "hidden" || style.overflowX === "clip") axes.push("horizontal");
      if (style.overflowY === "hidden" || style.overflowY === "clip") axes.push("vertical");
      if (axes.length > 0 && !hasVisualMask(style) && !isRoundedOverflowMask(style)) {
        boundaries.push({ el: node, box: paddingBoxRect(node), axes });
      }
      node = node.parentElement;
    }
    return boundaries;
  }
  function isStandardVisuallyHidden(el, style, rect) {
    const positioned = style.position === "absolute" || style.position === "fixed";
    const clipped = style.overflowX === "hidden" || style.overflowX === "clip";
    const legacyClip = String(style.clip || "").toLowerCase();
    const clipPath = String(style.clipPath || "").toLowerCase();
    const hasClip = legacyClip !== "auto" || clipPath !== "none" && clipPath !== "";
    return positioned && clipped && rect.width <= 2 && rect.height <= 2 && (style.whiteSpace === "nowrap" || hasClip);
  }
  function hasStandardVisuallyHiddenAncestor(el) {
    let node = el;
    while (node && node.nodeType === 1) {
      const rect = node.getBoundingClientRect();
      if (isStandardVisuallyHidden(node, getComputedStyle(node), rect)) return true;
      node = node.parentElement;
    }
    return false;
  }
  function isExcludedLayoutAuditElement(el) {
    return isDiagramLayoutElement(el) || hasVisualMaskAncestor(el) || hasStandardVisuallyHiddenAncestor(el);
  }
  function collectLayoutAuditElements() {
    return [...document.body?.querySelectorAll("*") || []].filter((el) => el instanceof Element && !isLavishUi(el)).slice(0, 800);
  }
  function pushLayoutFinding(findings, seen, finding) {
    if (finding.severity !== "error") return;
    const selectorValue = finding.selector || "";
    const axis = finding.axis === "vertical" ? "vertical" : "horizontal";
    const key = `${finding.kind}:${selectorValue}:${axis}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push({
      selector: selectorValue,
      kind: String(finding.kind || "layout-failure"),
      axis,
      overflowPx: roundedOverflowPx(finding.overflowPx),
      viewportWidth: Math.round(Number(finding.viewportWidth) || window.innerWidth || 0),
      severity: "error"
    });
  }
  function auditSevereTextOverflow(el, viewportWidth, findings, seen, animationTargets, failedRoots) {
    if (el === document.body || el === document.documentElement) return;
    if (isExcludedLayoutAuditElement(el)) return;
    if (!auditedText(el)) return;
    if (!isSemanticTextBoundary(el) && hasSemanticTextBoundaryAncestor(el)) return;
    if (failedRoots.some((root) => root.contains(el))) return;
    if (isAnimationAssociatedWithElement(el, animationTargets)) return;
    const rect = el.getBoundingClientRect();
    if (!isVisibleForLayoutAudit(el, rect)) return;
    const style = getComputedStyle(el);
    const fragments = textFragmentsForAudit(el);
    let severe = classifySevereTextOverflow({
      fragments,
      box: paddingBoxRect(el),
      overflowX: style.overflowX,
      overflowY: style.overflowY,
      isTruncated: isIntentionalTextTruncation(style),
      isVisuallyHidden: false
    });
    let failureRoot = el;
    for (const boundary of clippingBoundariesFor(el)) {
      const ancestorFailure = classifySevereTextOverflow({
        fragments,
        box: boundary.box,
        overflowX: boundary.axes.includes("horizontal") ? "hidden" : "auto",
        overflowY: boundary.axes.includes("vertical") ? "hidden" : "auto",
        isTruncated: isIntentionalTextTruncation(style),
        isVisuallyHidden: false
      });
      if (ancestorFailure && (!severe || ancestorFailure.overflowPx > severe.overflowPx)) {
        severe = ancestorFailure;
        failureRoot = boundary.el;
      }
    }
    if (!severe) return;
    failedRoots.push(failureRoot);
    pushLayoutFinding(findings, seen, {
      selector: selector(failureRoot),
      kind: severe.kind,
      axis: severe.axis,
      overflowPx: severe.overflowPx,
      viewportWidth,
      severity: "error"
    });
  }
  function materiallyEscapesViewport(rect, viewportWidth, minOutsidePx) {
    return classifyMaterialRectEscape({
      rect,
      boundary: { left: 0, right: viewportWidth, top: 0, bottom: window.innerHeight || 0 },
      axes: ["horizontal"],
      minOutsidePx
    });
  }
  function elementHasMaterialViewportEscape(el, viewportWidth, animationTargets) {
    if (hasIntentionalHorizontalScrollerAncestor(el)) return false;
    if (isAnimationAssociatedWithElement(el, animationTargets)) return false;
    if (isExcludedLayoutAuditElement(el)) return false;
    if (!isSemanticTextBoundary(el) && hasSemanticTextBoundaryAncestor(el)) return false;
    const rect = el.getBoundingClientRect();
    if (!isVisibleForLayoutAudit(el, rect)) return false;
    const style = getComputedStyle(el);
    const positioned = style.position === "absolute" || style.position === "fixed" || style.position === "sticky";
    if (positioned && !isRequiredControl(el)) return false;
    if (isRequiredControl(el)) {
      return materiallyEscapesViewport(rect, viewportWidth, 4)?.side === "end";
    }
    if (!auditedText(el)) return false;
    const materialPx = Math.max(24, viewportWidth * 0.05);
    return textFragmentsForAudit(el).some(
      (fragment) => materiallyEscapesViewport(fragment, viewportWidth, materialPx)?.side === "end"
    );
  }
  function auditUnreachableLeftText(el, viewportWidth, findings, seen, animationTargets) {
    if (hasIntentionalHorizontalScrollerAncestor(el)) return;
    if (isAnimationAssociatedWithElement(el, animationTargets)) return;
    if (isExcludedLayoutAuditElement(el)) return;
    if (!isSemanticTextBoundary(el) && hasSemanticTextBoundaryAncestor(el)) return;
    if (!auditedText(el)) return;
    const rect = el.getBoundingClientRect();
    if (!isVisibleForLayoutAudit(el, rect)) return;
    const style = getComputedStyle(el);
    if (["absolute", "fixed", "sticky"].includes(style.position) && !isRequiredControl(el)) return;
    const materialPx = Math.max(24, viewportWidth * 0.05);
    let escape = null;
    for (const fragment of textFragmentsForAudit(el)) {
      const candidate = materiallyEscapesViewport(fragment, viewportWidth, materialPx);
      if (candidate?.side === "start" && (!escape || candidate.overflowPx > escape.overflowPx)) escape = candidate;
    }
    if (!escape) return;
    pushLayoutFinding(findings, seen, {
      selector: selector(el),
      kind: "viewport-unreachable-content",
      axis: "horizontal",
      overflowPx: escape.overflowPx,
      viewportWidth,
      severity: "error"
    });
  }
  function auditRequiredControlBounds(el, viewportWidth, findings, seen, animationTargets, failedRoots) {
    if (!isRequiredControl(el) || isExcludedLayoutAuditElement(el)) return;
    if (isAnimationAssociatedWithElement(el, animationTargets)) return;
    const rect = el.getBoundingClientRect();
    if (!isVisibleForLayoutAudit(el, rect)) return;
    let clipped = null;
    for (const boundary of clippingBoundariesFor(el)) {
      const escape = classifyMaterialRectEscape({ rect, boundary: boundary.box, axes: boundary.axes });
      if (escape && (!clipped || escape.overflowPx > clipped.escape.overflowPx)) clipped = { boundary, escape };
    }
    if (clipped && !failedRoots.some((root) => root === clipped.boundary.el || root.contains(clipped.boundary.el))) {
      failedRoots.push(clipped.boundary.el);
      pushLayoutFinding(findings, seen, {
        selector: selector(clipped.boundary.el),
        kind: "clipped-control",
        axis: clipped.escape.axis,
        overflowPx: clipped.escape.overflowPx,
        viewportWidth,
        severity: "error"
      });
    }
    const horizontal = hasIntentionalHorizontalScrollerAncestor(el) ? null : materiallyEscapesViewport(rect, viewportWidth, 4);
    if (horizontal?.side === "start") {
      pushLayoutFinding(findings, seen, {
        selector: selector(el),
        kind: "viewport-unreachable-control",
        axis: "horizontal",
        overflowPx: horizontal.overflowPx,
        viewportWidth,
        severity: "error"
      });
    }
    const style = getComputedStyle(el);
    const fixedToViewport = style.position === "fixed" || style.position === "sticky";
    const lockedToViewport = rootVerticalScrollLocked() && !hasReachableVerticalScrollerAncestor(el);
    const scrollY = Number(window.scrollY || window.pageYOffset || 0);
    const verticalRect = fixedToViewport || lockedToViewport ? rect : {
      top: rect.top + scrollY,
      bottom: rect.bottom + scrollY,
      height: rect.height
    };
    const verticalBoundary = fixedToViewport || lockedToViewport ? { top: 0, bottom: window.innerHeight || 0 } : { top: 0, bottom: document.documentElement.scrollHeight };
    const vertical = classifyMaterialRectEscape({
      rect: verticalRect,
      boundary: verticalBoundary,
      axes: ["vertical"]
    });
    if (vertical) {
      pushLayoutFinding(findings, seen, {
        selector: selector(el),
        kind: "viewport-unreachable-control",
        axis: "vertical",
        overflowPx: vertical.overflowPx,
        viewportWidth,
        severity: "error"
      });
    }
  }
  function backgroundIsOpaque(el) {
    const style = getComputedStyle(el);
    if (Number.parseFloat(style.opacity || "1") < 0.95) return false;
    const color = String(style.backgroundColor || "").trim().toLowerCase();
    if (!color || color === "transparent") return false;
    const rgba = color.match(/^rgba?\(([^)]+)\)$/);
    if (!rgba) return false;
    const parts = rgba[1].split(/[\s,/]+/).filter(Boolean);
    if (parts.length < 4) return true;
    const alpha = Number(parts[3]);
    return Number.isFinite(alpha) && alpha >= 0.95;
  }
  function effectiveOpacityTo(node, stopParent) {
    let opacity = 1;
    let current = node;
    while (current && current !== stopParent) {
      const value = Number.parseFloat(getComputedStyle(current).opacity || "1");
      if (Number.isFinite(value)) opacity *= value;
      current = current.parentElement;
    }
    return opacity;
  }
  function opaqueSiblingBlocker(el, point, animationTargets) {
    const top = document.elementFromPoint(point.x, point.y);
    if (!(top instanceof Element) || top === el || el.contains(top) || top.contains(el) || isLavishUi(top)) return null;
    const targetAncestors = [];
    let targetNode = el;
    while (targetNode && targetNode !== document.body && targetNode !== document.documentElement) {
      targetAncestors.push(targetNode);
      targetNode = targetNode.parentElement;
    }
    let node = top;
    let foundOpaqueSurface = false;
    while (node && node !== document.body && node !== document.documentElement) {
      if (isAnimationAssociatedWithElement(node, animationTargets)) return null;
      if (backgroundIsOpaque(node)) foundOpaqueSurface = true;
      const siblingOf = targetAncestors.find((target) => target.parentElement === node.parentElement);
      if (siblingOf && foundOpaqueSurface && effectiveOpacityTo(top, node.parentElement) >= 0.95) return node;
      node = node.parentElement;
    }
    return null;
  }
  function fragmentSamplePoints(fragment) {
    const xs = [0.2, 0.5, 0.8];
    const ys = [0.2, 0.5, 0.8];
    return xs.flatMap(
      (xRatio) => ys.map((yRatio) => ({
        x: fragment.left + fragment.width * xRatio,
        y: fragment.top + fragment.height * yRatio
      }))
    );
  }
  function auditSevereTextOcclusion(elements, viewportWidth, findings, seen, animationTargets) {
    const candidates = elements.filter((el) => !isExcludedLayoutAuditElement(el)).filter((el) => {
      const text = auditedText(el);
      return text.length >= 8 || text.length > 0 && isRequiredControl(el);
    }).filter((el) => isSemanticTextBoundary(el) || !hasSemanticTextBoundaryAncestor(el)).filter((el) => isVisibleForLayoutAudit(el)).filter((el) => getComputedStyle(el).position === "static").filter((el) => !isAnimationAssociatedWithElement(el, animationTargets)).slice(0, 200);
    const failedRoots = [];
    for (const el of candidates) {
      if (failedRoots.some((root) => root.contains(el))) continue;
      const blockers = /* @__PURE__ */ new Map();
      let totalSamples = 0;
      for (const fragment of textFragmentsForAudit(el)) {
        if (rectArea(fragment) < 16) continue;
        for (const point of fragmentSamplePoints(fragment)) {
          if (point.x < 0 || point.y < 0 || point.x > viewportWidth || point.y > window.innerHeight) continue;
          totalSamples += 1;
          const blocker = opaqueSiblingBlocker(el, point, animationTargets);
          if (blocker) blockers.set(blocker, (blockers.get(blocker) || 0) + 1);
        }
      }
      const occludedSamples = Math.max(0, ...blockers.values());
      if (!isNearTotalOcclusion({ occludedSamples, totalSamples })) continue;
      failedRoots.push(el);
      pushLayoutFinding(findings, seen, {
        selector: selector(el),
        kind: "overlapping-text",
        axis: "horizontal",
        overflowPx: 0,
        viewportWidth,
        severity: "error"
      });
    }
  }
  function auditLayout() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const findings = [];
    const seen = /* @__PURE__ */ new Set();
    const elements = collectLayoutAuditElements();
    const animationTargets = activeAnimationTargets();
    const pageOverflowPx = document.documentElement.scrollWidth - viewportWidth;
    const escapedContent = elements.some((el) => elementHasMaterialViewportEscape(el, viewportWidth, animationTargets));
    if (isMaterialPageOverflow({ overflowPx: pageOverflowPx, viewportWidth, hasEscapedContent: escapedContent })) {
      pushLayoutFinding(findings, seen, {
        selector: "html",
        kind: "page-horizontal-overflow",
        axis: "horizontal",
        overflowPx: pageOverflowPx,
        viewportWidth,
        severity: "error"
      });
    }
    const failedClippingRoots = [];
    for (const el of elements) {
      auditRequiredControlBounds(el, viewportWidth, findings, seen, animationTargets, failedClippingRoots);
    }
    for (const el of elements) {
      auditUnreachableLeftText(el, viewportWidth, findings, seen, animationTargets);
    }
    for (const el of elements) {
      auditSevereTextOverflow(el, viewportWidth, findings, seen, animationTargets, failedClippingRoots);
    }
    auditSevereTextOcclusion(elements, viewportWidth, findings, seen, animationTargets);
    return findings;
  }
  function waitForDocumentFontsReady() {
    try {
      if (document.fonts?.ready) return document.fonts.ready.catch(() => {
      });
    } catch {
    }
    return Promise.resolve();
  }
  function waitForAnimationFrames(count) {
    return new Promise((resolve) => {
      function step(remaining) {
        if (remaining <= 0) {
          resolve();
          return;
        }
        const next = () => step(remaining - 1);
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(next);
        } else {
          window.setTimeout(next, 16);
        }
      }
      step(count);
    });
  }
  function waitForResizeObserverSettle() {
    return new Promise((resolve) => {
      let observer = null;
      let settleTimer = 0;
      let maxTimer = 0;
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        if (settleTimer) window.clearTimeout(settleTimer);
        if (maxTimer) window.clearTimeout(maxTimer);
        if (observer) observer.disconnect();
        resolve();
      };
      const scheduleFinish = () => {
        if (settleTimer) window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(finish, layoutAuditSettleMs);
      };
      if (typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(scheduleFinish);
        const observed = [document.documentElement, document.body, ...[...document.body?.querySelectorAll("*") || []]].filter(Boolean).slice(0, 800);
        for (const el of observed) observer.observe(el);
      }
      scheduleFinish();
      maxTimer = window.setTimeout(finish, layoutAuditMaxWaitMs);
    });
  }
  function waitForDomHydrationQuiescence() {
    return new Promise((resolve) => {
      if (typeof MutationObserver === "undefined" || !document.documentElement) {
        resolve(false);
        return;
      }
      let observer = null;
      let settleTimer = 0;
      let maxTimer = 0;
      let done = false;
      const finish = (quiescent) => {
        if (done) return;
        done = true;
        if (settleTimer) window.clearTimeout(settleTimer);
        if (maxTimer) window.clearTimeout(maxTimer);
        observer?.disconnect();
        resolve(quiescent);
      };
      const scheduleFinish = () => {
        if (settleTimer) window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(() => finish(true), layoutAuditSettleMs);
      };
      observer = new MutationObserver(scheduleFinish);
      observer.observe(document.documentElement, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      });
      scheduleFinish();
      maxTimer = window.setTimeout(() => finish(false), layoutAuditMaxWaitMs);
    });
  }
  function animationTarget(animation) {
    const target = (
      /** @type {any} */
      animation.effect?.target
    );
    if (target instanceof Element) return target;
    return target?.element instanceof Element ? target.element : null;
  }
  function activeDocumentAnimations() {
    if (typeof document.getAnimations !== "function") return [];
    return document.getAnimations().filter((animation) => ["running", "pending"].includes(String(animation.playState))).filter((animation) => !isLavishUi(animationTarget(animation)));
  }
  function activeAnimationTargets() {
    return activeDocumentAnimations().map(animationTarget).filter(Boolean);
  }
  function isAnimationAssociatedWithElement(el, targets) {
    return targets.some((target) => target === el || target.contains(el) || el.contains(target));
  }
  async function waitForFiniteAnimationsSettle() {
    const finite = activeDocumentAnimations().filter((animation) => {
      const endTime = Number(animation.effect?.getComputedTiming?.().endTime);
      return Number.isFinite(endTime);
    });
    if (finite.length === 0) return true;
    let settled = false;
    await Promise.race([
      Promise.all(finite.map((animation) => animation.finished.catch(() => {
      }))).then(() => {
        settled = true;
      }),
      new Promise((resolve) => window.setTimeout(resolve, layoutAuditAnimationMaxWaitMs))
    ]);
    if (!settled) {
      for (const animation of finite) {
        animation.finished.then(
          () => scheduleLayoutAudit(),
          () => scheduleLayoutAudit()
        );
      }
    }
    return settled;
  }
  function publishLayoutAudit(findings, complete, targetPresenceComplete = false) {
    const severe = findings.filter((finding) => finding?.severity === "error");
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const signature = JSON.stringify({ complete, targetPresenceComplete, viewportWidth, severe });
    if (!layoutAuditPublishRequested && signature === lastLayoutAuditSignature) return;
    layoutAuditPublishRequested = false;
    lastLayoutAuditSignature = signature;
    postArtifactMessage("lavish:layoutDiagnostics", {
      complete,
      artifact_revision: artifactRevision,
      artifact_pass_sequence: ++layoutAuditPassSequence,
      target_presence_complete: targetPresenceComplete === true,
      viewport_width: viewportWidth,
      findings: severe
    });
  }
  async function runLayoutAudit(runId) {
    await waitForDocumentFontsReady();
    await waitForResizeObserverSettle();
    const animationsSettled = await waitForFiniteAnimationsSettle();
    await waitForAnimationFrames(2);
    if (runId !== layoutAuditRun) return;
    const first = auditLayout();
    await new Promise((resolve) => window.setTimeout(resolve, layoutAuditStableSampleMs));
    await waitForAnimationFrames(2);
    if (runId !== layoutAuditRun) return;
    const second = auditLayout();
    const domHydrationQuiescent = await waitForDomHydrationQuiescence();
    if (runId !== layoutAuditRun) return;
    const final = domHydrationQuiescent ? auditLayout() : second;
    const targetPresenceComplete = document.readyState === "complete" && domHydrationQuiescent;
    publishLayoutAudit(
      findStableLayoutFindings(domHydrationQuiescent ? second : first, final),
      animationsSettled && targetPresenceComplete,
      targetPresenceComplete
    );
  }
  function scheduleLayoutAudit(publishRequested = false) {
    if (publishRequested) layoutAuditPublishRequested = true;
    if (layoutAuditTimer) window.clearTimeout(layoutAuditTimer);
    const runId = ++layoutAuditRun;
    layoutAuditTimer = window.setTimeout(() => {
      runLayoutAudit(runId).catch(() => {
        if (runId === layoutAuditRun) publishLayoutAudit([], false);
      });
    }, 50);
  }
  function startLayoutAudit() {
    scheduleLayoutAudit();
    window.addEventListener("load", () => scheduleLayoutAudit(), { once: true });
    window.addEventListener("resize", () => scheduleLayoutAudit(), { passive: true });
    window.addEventListener("animationend", () => scheduleLayoutAudit(), { passive: true });
    window.addEventListener("transitionend", () => scheduleLayoutAudit(), { passive: true });
  }
  function reportLocalAssetFailure(event) {
    const el = event.target;
    if (!(el instanceof Element) || isLavishUi(el)) return;
    const tag = String(el.tagName || "").toLowerCase();
    if (!["img", "script", "link", "source", "video", "audio", "iframe"].includes(tag)) return;
    const raw = String(el.getAttribute("src") || el.getAttribute("href") || "");
    if (!raw) return;
    let resolved;
    try {
      resolved = new URL(raw, document.baseURI);
    } catch {
      return;
    }
    if (resolved.origin !== window.location.origin) return;
    postArtifactMessage("lavish:artifactAssetFailure", {
      detail: "<" + tag + "> could not load " + resolved.pathname
    });
  }
  window.addEventListener("error", reportLocalAssetFailure, true);
  let activeCardContext = null;
  let reviewStateTimer = 0;
  let draftRestoreTimer = 0;
  const REVIEW_DRAFT_ANCHOR_SETTLE_MS = 1500;
  function cancelPendingDraftRestore() {
    if (!draftRestoreTimer) return;
    window.clearTimeout(draftRestoreTimer);
    draftRestoreTimer = 0;
  }
  function safeQuerySelector(selector2) {
    try {
      return document.querySelector(String(selector2 || ""));
    } catch {
      return null;
    }
  }
  function lavishQuestionControls() {
    const entries = [];
    for (const scope of document.querySelectorAll("[data-lavish-question]")) {
      const question = String(scope.getAttribute("data-lavish-question") || "");
      const controls = [...scope.querySelectorAll("input,select,textarea")];
      controls.forEach((el, index) => {
        const control = (
          /** @type {any} */
          el
        );
        const type = String(control.getAttribute("type") || control.type || "text").toLowerCase();
        if (["button", "submit", "reset", "file", "image", "password"].includes(type)) return;
        if (entries.length >= 200) return;
        entries.push({
          el: control,
          key: [
            question,
            String(control.getAttribute("name") || control.id || ""),
            type,
            String(control.getAttribute("value") || "")
          ].join("|").slice(0, 300),
          index,
          question,
          type
        });
      });
    }
    return entries;
  }
  function collectReviewState() {
    const card = shadow ? shadow.querySelector(".lavish-annotation-card") : null;
    const textarea = card ? card.querySelector("textarea") : null;
    const text = textarea ? String(textarea.value || "") : "";
    return {
      // A text-range card is anchored to a live Range, which a reload invalidates - restoring it
      // could point the annotation at different text, so only element cards come back.
      card: activeCardContext && activeCardContext.tag !== "text" && text.trim() ? { selector: String(activeCardContext.selector || ""), text: text.slice(0, 4e3) } : null,
      fields: lavishQuestionControls().map((entry) => ({
        key: entry.key,
        index: entry.index,
        question: entry.question,
        type: entry.type,
        value: String(entry.el.value === void 0 || entry.el.value === null ? "" : entry.el.value).slice(0, 2e3),
        checked: entry.type === "checkbox" || entry.type === "radio" ? Boolean(entry.el.checked) : null
      }))
    };
  }
  function scheduleReviewStateReport() {
    if (reviewStateTimer) window.clearTimeout(reviewStateTimer);
    reviewStateTimer = window.setTimeout(() => {
      reviewStateTimer = 0;
      postArtifactMessage("lavish:reviewState", { state: collectReviewState() });
    }, 120);
  }
  function restoreReviewState(state) {
    if (!state || typeof state !== "object") return;
    const fields = Array.isArray(state.fields) ? state.fields : [];
    if (fields.length) {
      const entries = lavishQuestionControls();
      for (const field of fields) {
        const match = entries.find((entry) => entry.key === field.key) || entries.find((entry) => entry.question === field.question && entry.index === field.index);
        if (!match) continue;
        if (field.checked === null) match.el.value = String(field.value ?? "");
        else match.el.checked = Boolean(field.checked);
      }
    }
    const card = state.card;
    if (!card || !card.selector || !String(card.text || "").trim()) return;
    const target = safeQuerySelector(card.selector);
    if (!target) {
      cancelPendingDraftRestore();
      draftRestoreTimer = window.setTimeout(() => {
        draftRestoreTimer = 0;
        if (activeCardContext) return;
        const late = safeQuerySelector(card.selector);
        if (late) {
          showAnnotationCard(late, { restoreText: String(card.text) });
          return;
        }
        postArtifactMessage("lavish:reviewDraftUnrestorable", { selector: String(card.selector) });
      }, REVIEW_DRAFT_ANCHOR_SETTLE_MS);
      return;
    }
    showAnnotationCard(target, { restoreText: String(card.text) });
  }
  document.addEventListener("change", (event) => {
    const el = event.target;
    if (el instanceof Element && el.closest("[data-lavish-question]")) scheduleReviewStateReport();
  });
  document.addEventListener("input", (event) => {
    const el = event.target;
    if (el instanceof Element && el.closest("[data-lavish-question]")) scheduleReviewStateReport();
  });
  function ensureShadow() {
    if (shadow) return shadow;
    const host = document.createElement("div");
    host.className = "lavish-annotation-root";
    host.setAttribute("data-lavish-ui", "annotation-root");
    document.documentElement.appendChild(host);
    shadow = host.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `:host{all:initial;position:fixed;z-index:2147483647;left:0;top:0;color-scheme:dark;--ink-900:#0f1115;--ink-800:#11141a;--ink-700:#171a21;--ink-600:#1c212b;--steel-700:#2a2f3a;--steel-600:#303745;--steel-500:#3c4557;--steel-400:#8c96aa;--steel-300:#aeb6c6;--steel-200:#b9c0cf;--steel-100:#d8deea;--cream-50:#fffbf3;--cream-100:#f7f3ea;--cream-200:#e8e1cf;--brass-500:#f4c95d;--brass-400:#ffd877;--brass-ink:#17130a;--bg:var(--ink-900);--bg-panel:var(--ink-800);--bg-elevated:var(--ink-600);--fg:var(--cream-100);--fg-faint:var(--steel-300);--border:var(--steel-600);--accent:#f4c95d;--accent-hover:#ffd877;--font-sans:Geist,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;--font-mono:"Geist Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;--radius-md:10px;--radius-xl:14px;--shadow-floating:0 20px 70px rgba(0,0,0,.35);font-family:var(--font-sans)}*{box-sizing:border-box}:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.lavish-text-highlight{position:fixed;pointer-events:none;background:rgba(244,201,93,.28);border-radius:2px;box-shadow:0 0 0 1px rgba(244,201,93,.45)}.lavish-annotation-card{position:fixed;width:min(320px,calc(100vw - 24px));padding:12px;border-radius:var(--radius-xl);background:var(--bg-panel);color:var(--fg);border:1px solid var(--accent);box-shadow:var(--shadow-floating);font:14px/1.4 var(--font-sans)}.lavish-heading{font-weight:700;margin-bottom:6px}.lavish-annotation-card textarea{width:100%;min-height:86px;resize:vertical;border-radius:var(--radius-md);border:1px solid var(--border);background:var(--bg);color:var(--fg);padding:9px;font:inherit;font-family:var(--font-sans)}.lavish-annotation-card textarea::placeholder{color:var(--fg-faint)}.lavish-annotation-card .lavish-hint{margin-top:6px;font-size:11px;color:var(--fg-faint)}.lavish-annotation-card .lavish-hint-alert{color:#ff9d7a;font-weight:700}.lavish-annotation-card .lavish-row{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}.lavish-annotation-card button{border:0;border-radius:var(--radius-md);padding:8px 10px;font-family:var(--font-sans);font-size:13px;font-weight:700;cursor:pointer}.lavish-annotation-card button:active{opacity:.85}.lavish-annotation-card .lavish-send{background:var(--accent);color:var(--brass-ink)}.lavish-annotation-card .lavish-send:hover{background:var(--accent-hover)}.lavish-annotation-card .lavish-cancel{background:var(--steel-700);color:var(--fg)}.lavish-annotation-card.is-dropping{outline:2px dashed var(--accent);outline-offset:3px}.lavish-attachments{display:flex;flex-direction:column;gap:6px;margin-top:8px;max-height:176px;overflow-y:auto}.lavish-attachment-chip{display:flex;align-items:center;gap:8px;padding:6px;border-radius:var(--radius-md);background:var(--bg);border:1px solid var(--border)}.lavish-attachment-chip.is-error{border-color:#e0623d}.lavish-attachment-thumb{width:32px;height:32px;border-radius:6px;object-fit:cover;background:var(--ink-700);flex:0 0 auto}.lavish-attachment-thumb-empty{display:inline-block}.lavish-attachment-body{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1 1 auto}.lavish-attachment-name{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lavish-attachment-status{font-size:11px;color:var(--fg-faint)}.lavish-attachment-status-error{color:#ff9d7a}.lavish-attachment-retry{flex:0 0 auto;padding:4px 8px;font-size:11px;font-weight:700;border-radius:8px;background:var(--steel-700);color:var(--fg);cursor:pointer;border:0}.lavish-attachment-remove{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0!important;border-radius:50%;background:transparent;color:rgba(255,255,255,.85);cursor:pointer;border:0}.lavish-attachment-remove:hover{background:rgba(255,255,255,.14);color:#fff}.lavish-attach-row{margin-top:8px}.lavish-attach{display:inline-flex;align-items:center;gap:6px;padding:6px 9px!important;background:var(--steel-700)!important;color:var(--fg)!important;font-size:12px!important}.lavish-attach:hover{background:var(--steel-600)!important}.lavish-reveal-marker{position:fixed;pointer-events:none;border:2px solid var(--accent);border-radius:4px;box-shadow:0 0 0 4px rgba(244,201,93,.22);animation:lavish-reveal-pulse 2.4s var(--ease,ease-out) forwards}@keyframes lavish-reveal-pulse{0%{opacity:0}12%{opacity:1}70%{opacity:1}100%{opacity:0}}`;
    shadow.appendChild(style);
    return shadow;
  }
  function closeCard() {
    activeCardContext = null;
    if (activeAttachments) {
      activeAttachments.destroy();
      activeAttachments = null;
    }
    if (shadow) {
      for (const el of [...shadow.querySelectorAll(".lavish-annotation-card")]) el.remove();
    }
    clearHighlight(hovered);
    clearHighlight(selected);
    hovered = null;
    clearTextHighlight();
    selected = null;
    scheduleReviewStateReport();
  }
  function showAnnotationCard(target, options2 = {}) {
    cancelPendingDraftRestore();
    const root = ensureShadow();
    closeCard();
    const c = options2.context || context(target, { table: true });
    activeCardContext = c;
    let anchor = target;
    if (options2.range) {
      highlightTextRange(options2.range);
    } else {
      anchor = annotationTargetEl(target);
      selected = anchor;
      highlightElement(selected);
    }
    const rect = options2.range ? options2.range.getBoundingClientRect() : anchor.getBoundingClientRect();
    const card = document.createElement("div");
    card.className = "lavish-annotation-card";
    const nodeLabel = c.tag === "mermaid-node" ? c.target?.label || c.text || "" : "";
    const isTableCell = c.target?.type === "table-cell";
    const isCellItself = isTableCell && (c.tag === "td" || c.tag === "th");
    const tableLabel = isTableCell ? [c.target?.rowLabel, c.target?.columnLabel].filter(Boolean).join(" \u2192 ") : "";
    const heading = c.tag === "text" ? "Annotate text" : tableLabel ? isCellItself ? "Annotate cell: " + escapeAnnotationText(tableLabel) : "Annotate &lt;" + c.tag + "&gt; in " + escapeAnnotationText(tableLabel) : c.tag === "mermaid-node" ? "Annotate node" + (nodeLabel ? ": " + escapeAnnotationText(nodeLabel) : "") : "Annotate &lt;" + c.tag + "&gt;";
    const placeholder = c.tag === "text" ? "Tell the agent what to change about this text..." : isCellItself ? "Tell the agent what to change about this table cell..." : c.tag === "mermaid-node" ? "Tell the agent what to change about this diagram node..." : "Tell the agent what to change about this element...";
    const sendNowHint = /Mac|iP(hone|ad|od)/.test(navigator.platform) ? "\u2318" : "Ctrl";
    card.innerHTML = '<div class="lavish-heading">' + heading + '</div><textarea placeholder="' + placeholder + '"></textarea><div class="lavish-attachments" data-attachments hidden></div><div class="lavish-attach-row"><button class="lavish-attach" type="button"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Attach image</span></button><input class="lavish-attach-input" type="file" accept="' + ATTACHMENT_IMAGE_TYPES.accept + '" multiple hidden></div><div class="lavish-hint">Enter to queue &middot; ' + sendNowHint + '+Enter to send &middot; paste or drop an image</div><div class="lavish-row"><button class="lavish-cancel" type="button">Cancel</button><button class="lavish-send" type="button">Queue</button></div>';
    root.appendChild(card);
    function positionCard() {
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - card.offsetWidth - 12);
      const top = Math.min(Math.max(12, rect.bottom + 8), window.innerHeight - card.offsetHeight - 12);
      card.style.left = left + "px";
      card.style.top = top + "px";
    }
    positionCard();
    const textarea = (
      /** @type {HTMLTextAreaElement | null} */
      card.querySelector("textarea")
    );
    const cancelButton = (
      /** @type {HTMLButtonElement | null} */
      card.querySelector(".lavish-cancel")
    );
    const sendButton = (
      /** @type {HTMLButtonElement | null} */
      card.querySelector(".lavish-send")
    );
    const attachmentsList = (
      /** @type {HTMLDivElement | null} */
      card.querySelector("[data-attachments]")
    );
    const attachButton = (
      /** @type {HTMLButtonElement | null} */
      card.querySelector(".lavish-attach")
    );
    const attachInput = (
      /** @type {HTMLInputElement | null} */
      card.querySelector(".lavish-attach-input")
    );
    const attachNotice = (
      /** @type {HTMLDivElement | null} */
      card.querySelector(".lavish-hint")
    );
    if (!textarea || !cancelButton || !sendButton || !attachmentsList || !attachButton || !attachInput) return;
    const defaultHintHtml = attachNotice ? attachNotice.innerHTML : "";
    const notify = (message) => {
      if (!attachNotice) return;
      if (message) {
        attachNotice.textContent = message;
        attachNotice.classList.add("lavish-hint-alert");
      } else {
        attachNotice.innerHTML = defaultHintHtml;
        attachNotice.classList.remove("lavish-hint-alert");
      }
    };
    const attachments = makeAttachmentsController(attachmentsList, { notify, onLayout: positionCard });
    activeAttachments = attachments;
    attachButton.onclick = () => attachInput.click();
    attachInput.addEventListener("change", () => {
      attachments.addFiles(attachInput.files);
      attachInput.value = "";
    });
    textarea.addEventListener("paste", (event) => {
      const { images, keepTextPaste } = planClipboardPaste(event.clipboardData, ATTACHMENT_ACCEPTED_MIME);
      if (images.length && attachments.addFiles(images) && !keepTextPaste) event.preventDefault();
    });
    card.addEventListener("dragover", (event) => {
      if (dataTransferHasFiles(event.dataTransfer)) {
        event.preventDefault();
        card.classList.add("is-dropping");
      }
    });
    card.addEventListener("dragleave", (event) => {
      if (event.target === card) card.classList.remove("is-dropping");
    });
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("is-dropping");
      const { images, unsupported } = partitionDroppedFiles(event.dataTransfer, ATTACHMENT_ACCEPTED_MIME);
      if (images.length) attachments.addFiles(images);
      if (unsupported.length) attachments.rejectUnsupportedBatch(unsupported);
      if (!images.length && !unsupported.length && dataTransferHasFiles(event.dataTransfer)) {
        attachments.rejectUnsupported("file");
      }
    });
    function tryQueue() {
      if (attachments.hasPending()) {
        attachments.setQueueBlocked(true);
        return false;
      }
      if (attachments.hasErrors()) {
        attachments.setQueueBlocked(true);
        return false;
      }
      attachments.setQueueBlocked(false);
      const prompt = textarea.value.trim();
      const readyAttachments = attachments.collectReady();
      if (prompt || readyAttachments.length) {
        queuePrompt(prompt, { ...c, queueKey: "", attachments: readyAttachments });
      }
      closeCard();
      return true;
    }
    cancelButton.onclick = closeCard;
    sendButton.onclick = () => {
      tryQueue();
    };
    textarea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
        event.preventDefault();
        const sendNow = (event.ctrlKey || event.metaKey) && (!!textarea.value.trim() || attachments.hasReady());
        const queued = tryQueue();
        if (queued && sendNow) sendQueuedPrompts();
      } else if (event.key === "Escape" && !event.isComposing) {
        if (textarea.value.trim() || attachments.hasPending() || attachments.hasErrors() || attachments.hasReady())
          return;
        event.preventDefault();
        closeCard();
      }
    });
    textarea.addEventListener("input", scheduleReviewStateReport);
    if (typeof options2.restoreText === "string") {
      textarea.value = options2.restoreText;
      scheduleReviewStateReport();
    }
    setTimeout(() => textarea.focus(), 0);
  }
  function dataTransferHasFiles(dataTransfer) {
    if (!dataTransfer) return false;
    if ((dataTransfer.files || []).length) return true;
    for (const item of dataTransfer.items || []) {
      if (item.kind === "file") return true;
    }
    return (dataTransfer.types || []).includes?.("Files");
  }
  window.lavish = {
    queuePrompt,
    sendQueuedPrompts,
    endSession,
    getQueuedPrompts: () => [],
    setStatus: (message) => postArtifactMessage("lavish:status", { message: String(message) }),
    snapshot
  };
  window.addEventListener("message", (event) => {
    if (event.source !== parent) return;
    const msg = event.data || {};
    if (msg.type === "lavish:setAnnotationMode") setAnnotationMode(msg.enabled);
    if (msg.type === "lavish:attachmentResult") {
      if (!isTrustedAttachmentResult(event, { parentWindow: parent, nonce: ATTACHMENT_NONCE })) return;
      activeAttachments?.handleResult(msg.localId, msg.ok, msg.id, msg.error);
    }
    if (msg.type === "lavish:requestSnapshot") {
      postArtifactMessage("lavish:snapshot", {
        snapshot: snapshot(),
        snapshot_request_id: typeof msg.snapshot_request_id === "string" ? msg.snapshot_request_id : ""
      });
    }
    if (msg.type === "lavish:restoreScroll") {
      window.scrollTo(Number(msg.x) || 0, Number(msg.y) || 0);
    }
    if (msg.type === "lavish:restoreReviewState") restoreReviewState(msg.state);
    if (msg.type === "lavish:revealElement") revealElement(msg.selector);
  });
  function revealElement(selector2) {
    const target = selector2 === "html" ? document.documentElement : safeQuerySelector(selector2);
    if (!(target instanceof Element)) return;
    target.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
    const root = ensureShadow();
    for (const el of [...root.querySelectorAll(".lavish-reveal-marker")]) el.remove();
    const rect = target.getBoundingClientRect();
    const marker = document.createElement("div");
    marker.className = "lavish-reveal-marker";
    marker.style.left = rect.left + "px";
    marker.style.top = rect.top + "px";
    marker.style.width = Math.max(rect.width, 4) + "px";
    marker.style.height = Math.max(rect.height, 4) + "px";
    root.appendChild(marker);
    window.setTimeout(() => marker.remove(), 2400);
  }
  document.addEventListener(
    "keydown",
    (event) => {
      if (!isModeToggleHotkeyEvent(event)) return;
      event.preventDefault();
      postArtifactMessage("lavish:toggleAnnotationMode");
    },
    true
  );
  let scrollFrame = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        postArtifactMessage("lavish:scroll", { x: window.scrollX, y: window.scrollY });
      });
    },
    { passive: true }
  );
  document.addEventListener(
    "mouseover",
    (event) => {
      if (!annotationMode || isLavishUi(event.target) || isLavishAction(event.target) || isInteractiveControl(event.target))
        return;
      const target = annotationTargetEl(event.target);
      if (target === selected) return;
      if (hovered && hovered !== selected) clearHighlight(hovered);
      hovered = target;
      highlightElement(hovered);
    },
    true
  );
  document.addEventListener(
    "mouseout",
    () => {
      if (hovered && hovered !== selected) {
        clearHighlight(hovered);
        hovered = null;
      }
    },
    true
  );
  document.addEventListener(
    "mouseup",
    (event) => {
      if (!annotationMode || isLavishUi(event.target) || isLavishAction(event.target) || isInteractiveControl(event.target))
        return;
      const c = textSelectionContext(document.getSelection());
      if (!c) return;
      ignoreNextClick = true;
      showAnnotationCard(c.element, { context: c, range: c.range });
    },
    true
  );
  document.addEventListener(
    "click",
    (event) => {
      if (!annotationMode || isLavishUi(event.target) || isLavishAction(event.target) || isInteractiveControl(event.target))
        return;
      event.preventDefault();
      event.stopPropagation();
      if (ignoreNextClick) {
        ignoreNextClick = false;
        return;
      }
      showAnnotationCard(event.target);
    },
    true
  );
  setAnnotationMode(annotationMode);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startLayoutAudit, { once: true });
  } else {
    startLayoutAudit();
  }
  enhanceMermaid();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceMermaid, { once: true });
  }
  const mermaidObserver = new MutationObserver(() => scheduleMermaidEnhance());
  mermaidObserver.observe(document.documentElement, { childList: true, subtree: true });
})(deriveQueueKey, isNativeInteractiveControl, mermaidHelpers, artifactRevision, artifactLoadToken, key, {"maxAttachmentCount":4,"maxAttachmentBytes":10485760,"acceptedImageMime":["image/png","image/jpeg","image/webp"]});
})();