import { Button } from "@/components/ui/Button";

export function MobileStickyCta() {
  return (
    <div className="glass-nav fixed inset-x-0 bottom-0 z-40 flex justify-center gap-3 border-t border-white/10 px-4 py-3">
      <Button
        href="/daman-game-login"
        variant="outline"
        size="sm"
        className="flex-1 sm:max-w-xs"
      >
        Login guide
      </Button>
      <Button
        href="/daman-game-app"
        variant="primary"
        size="sm"
        className="flex-1 sm:max-w-xs"
      >
        App guide
      </Button>
    </div>
  );
}
