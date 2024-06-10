import styled from '@emotion/styled';

import { useRegisterSW } from 'virtual:pwa-register/react';
import { colors } from '../../../styles';

const StyledBadgeContainer = styled("div")`
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
`;

const StyledBadgeToast = styled("div")`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  margin: 1.6rem;
  padding: 1.2rem;
  border: 0.5px solid ${colors.gray100};
  z-index: 1;
  text-align: left;
  box-shadow: 0.3rem 0.4rem 0.5rem 0 ${colors.gray900};
  background-color: ${colors.black};
`;

const StyledBadgeMessage = styled("div")`
  margin-bottom: 0.8rem;
`;

const StyledBadgeButton = styled("button")`
  background-color: ${colors.gray900};
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;

  &:hover, &:focus {
    border: 0.5px solid ${colors.main};
    color: ${colors.main};
  }
`;

function PWABadge() {
  // check for updates every hour
  const period = 60 * 60 * 1000

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (period <= 0) return
      if (r?.active?.state === 'activated') {
        registerPeriodicSync(period, swUrl, r)
      }
      else if (r?.installing) {
        r.installing.addEventListener('statechange', (e) => {
          const sw = e.target as ServiceWorker
          if (sw.state === 'activated')
            registerPeriodicSync(period, swUrl, r)
        })
      }
    },
  })

  function close() {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <StyledBadgeContainer role="alert" aria-labelledby="toast-message">
      {(offlineReady || needRefresh)
        && (
          <StyledBadgeToast>
            <StyledBadgeMessage>
              {offlineReady
                ? <span id="toast-message">App ready to work offline</span>
                : <span id="toast-message">New content available, click on reload button to update.</span>}
            </StyledBadgeMessage>
            <div>
              {needRefresh && <StyledBadgeButton onClick={() => updateServiceWorker(true)}>Reload</StyledBadgeButton>}
              <StyledBadgeButton onClick={() => close()}>Close</StyledBadgeButton>
            </div>
          </StyledBadgeToast>
        )}
    </StyledBadgeContainer>
  )
}

export default PWABadge

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(period: number, swUrl: string, r: ServiceWorkerRegistration) {
  if (period <= 0) return

  setInterval(async () => {
    if ('onLine' in navigator && !navigator.onLine)
      return

    const resp = await fetch(swUrl, {
      cache: 'no-store',
      headers: {
        'cache': 'no-store',
        'cache-control': 'no-cache',
      },
    })

    if (resp?.status === 200)
      await r.update()
  }, period)
}
