import { setContextOptions } from '../_functions'

export const initContextSelects = (searchPlace = document) => {
  const contextSelects = searchPlace?.querySelectorAll('.context-select')

  if (contextSelects) {
    contextSelects.forEach((contextSelectEl) => {
      const contextSelectId = contextSelectEl.dataset.contextId
      const contextContentSelect = searchPlace.querySelector(
        `.context-content[data-content-id="${contextSelectId}"]`,
      )
      const contextContentState = Array.from(
        contextContentSelect.querySelectorAll('option'),
      )

      const currentContextValue =
        contextSelectEl.querySelector('option[selected]')?.value ??
        contextSelectEl.querySelector('option')?.value

      setContextOptions(
        currentContextValue,
        contextContentSelect,
        contextContentState,
      )

      if (contextContentSelect.classList.contains('context-select')) {
        const relatedContextId = contextContentSelect.dataset.contextId

        const relatedContentSelect = searchPlace.querySelector(
          `.context-content[data-content-id="${relatedContextId}"]`,
        )
        const relatedContentState = Array.from(
          relatedContentSelect.querySelectorAll('option'),
        )

        const observer = new MutationObserver(() => {
          setContextOptions(
            contextContentSelect.value,
            relatedContentSelect,
            relatedContentState,
          )
        })

        observer.observe(contextContentSelect, {
          childList: true,
        })
      }

      contextSelectEl.addEventListener('input', (e) => {
        const currentValue = e.currentTarget.value
        setContextOptions(
          currentValue,
          contextContentSelect,
          contextContentState,
        )
      })
    })
  }
}

initContextSelects()
