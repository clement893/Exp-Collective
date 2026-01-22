/**
 * Menus Manager Component
 * 
 * Component for managing navigation menus
 * 
 * @component
 */

'use client';

import { useState, useEffect } from 'react';
import { Card, Button, LoadingSkeleton, Alert } from '@/components/ui';
import { menusAPI, type Menu } from '@/lib/api/menus';
import { Plus, Edit, Trash2, Menu as MenuIcon } from 'lucide-react';
import { useToast } from '@/lib/toast';

export default function MenusManager() {
  const { showToast, success, error: showError } = useToast();
  const [menus, setMenus] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await menusAPI.list();
      setMenus(data);
    } catch (err) {
      const errorMessage = 'Erreur lors du chargement des menus';
      setError(errorMessage);
      console.error(err);
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce menu ?')) return;
    
    try {
      await menusAPI.delete(id);
      await loadMenus();
      success('Menu supprimé avec succès');
    } catch (err) {
      const errorMessage = 'Erreur lors de la suppression';
      setError(errorMessage);
      showError(errorMessage);
    }
  };

  const getLocationLabel = (location: string) => {
    const labels: Record<string, string> = {
      header: 'En-tête',
      footer: 'Pied de page',
      sidebar: 'Barre latérale',
    };
    return labels[location] || location;
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <LoadingSkeleton variant="card" count={3} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Menus</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Gérez les menus de navigation de votre site
          </p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => {
            // TODO: Open create modal
            showToast({
              message: 'La création de menu sera disponible prochainement',
              type: 'info',
            });
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Menu
        </Button>
      </div>

      {menus.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((menu) => (
            <Card key={menu.id} title={menu.name}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MenuIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground capitalize">
                    {getLocationLabel(menu.location)}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {menu.items.length} élément{menu.items.length > 1 ? 's' : ''}
                </p>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      // TODO: Open edit modal
                      showToast({
                        message: 'L\'édition de menu sera disponible prochainement',
                        type: 'info',
                      });
                    }}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDelete(menu.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div className="text-center py-12">
            <MenuIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-2">Aucun menu créé</p>
            <p className="text-sm text-muted-foreground">
              Créez votre premier menu pour commencer
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
