
var nk = (function () {

    function IsExist(element)
    {
        if (element != null && element != undefined && element != 'undefined')
            return true
        else
            return false
    }
    function IsClassExist(element, data) {
        if (IsExist(element) && element.classList.contains(data))
            return true;
        else
            return false;
    }

    function GetById(element) {
        return document.getElementById(element);
    }
    function GetelementById(element,data) {
        return element.getElementById(data);
    }
    function GetByClass(element) {
        return document.getElementsByClassName(element);
    }
    function GetelementByClass(element,data) {
        return element.getElementsByClassName(data);
    }
    function GetByTag(element, child) {
        return element.getElementsByTagName(child);      
    }
    function GetByChild(element, child) {
        return element.children[child];
    }
    function GetValue(element) {
        value = '';
        if (IsExist(element))
            value = element.value;
        return value;
    }
     
    function clrText(element)
    {
        if (IsExist(element))
            element.innerText = '';
    }
    function clrHtml(element) {
        if (IsExist(element))
            element.innerHTML = '';
    }
    function clrValue(element) {
        if (IsExist(element))
            element.value = '';
    }

    function Hide(element) {
        if (IsExist(element))
            element.style.display = 'none';
    }
    function SetVisibility(element,data) {
        if (IsExist(element))
            element.style.visibility = data;
    }
    function Show(element) {
        if (IsExist(element))
            element.style.display = 'block';
    }

    function SetBackgroundColor(element, data) {
        if (IsExist(element))
            element.style.backgroundColor = data;
    }
    function SetFloat(element, value) {
        if (IsExist(element))
            element.style.float = value;      
    }
    function SetWidth(element, value) {
        if (IsExist(element))
            element.style.width = value;
    }
    function SetHeight(element, value) {
        if (IsExist(element))
            element.style.height = value;
    }
    
    function QuerySelectorAll(element) {
        return document.querySelectorAll(element);
    }
    function SetText(element, data)
    {
        if (IsExist(element))
            element.innerText = data;  
    }
    function SetTextContent(element, data) {
        if (IsExist(element))
            element.textContent = data;
    }
    function SetValue(element, data) {
        if (IsExist(element))
            element.value = data;
    }
    function SetClass(element, data) {
        if (IsExist(element))
            element.classList += data;
    }
    function SetHtml(element, data) {
        if (IsExist(element))
            element.innerHTML = data;
    }
    function SetMin(element, data) {
        if (IsExist(element))
            element.min = data;
    }
    function SetMax(element, data) {
        if (IsExist(element))
            element.max = data;
    }   
    function AppendHtml(element, data) {
        if (IsExist(element))
            element.innerHTML += data;
    }

    function RegistorEvent(element, event, func) {
        if (IsExist(element))
            common.addEvent(element, event, func);
    }
    function ToggleClass(element, data) {
        if (IsExist(element))
            element.classList.toggle(data);
    }
       
    function RemoveClass(element, data) {
        if (IsExist(element))
            element.classList.remove(data);           
    }
    function RemoveClasses(element, data) {
        if (IsExist(element)) {
            data.forEach(function (item) {
                element.classList.remove(item);
            });
        }
    }

    return {
        IsExist: IsExist,
        GetById: GetById,
        GetByClass: GetByClass,
        GetByChild: GetByChild,
        GetValue: GetValue,
        clrText: clrText,
        clrHtml: clrHtml,
        clrValue: clrValue,
        Hide: Hide,
        Show: Show,
        RegistorEvent: RegistorEvent,
        SetFloat: SetFloat,
        SetWidth: SetWidth,
        SetHeight: SetHeight,
        SetText: SetText,
        SetHtml: SetHtml,
        SetValue: SetValue,
        ToggleClass: ToggleClass,
        RemoveClass: RemoveClass,
        RemoveClasses: RemoveClasses,
        GetByTag: GetByTag,
        SetClass: SetClass,
        IsClassExist: IsClassExist,
        GetelementByClass: GetelementByClass,
        GetelementById: GetelementById,
        SetVisibility: SetVisibility,
        SetBackgroundColor: SetBackgroundColor,
        QuerySelectorAll: QuerySelectorAll,
        SetMin: SetMin,
        SetMax: SetMax,
        SetTextContent: SetTextContent,
        AppendHtml: AppendHtml
    };
})();
